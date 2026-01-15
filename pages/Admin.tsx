
import React from 'react';
import { CorporateData } from '../types';

/* Define props interface for Admin component to receive localized content */
interface AdminProps {
  content: CorporateData;
}

const Admin: React.FC<AdminProps> = ({ content }) => {
  return (
    <div className="min-h-screen bg-slate-100 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-black text-slate-900">Dashboard de Control</h1>
            <p className="text-slate-500">Bienvenido al portal de gestión de GrowPoland Investment.</p>
          </div>
          <button className="bg-red-600 text-white px-6 py-2 rounded font-bold text-sm shadow-lg hover:bg-red-700 transition-colors">
            + Nueva Marca
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {[
            { label: 'Ingresos Totales', val: '€1.2M', growth: '+12%', color: 'blue' },
            { label: 'Pedidos Activos', val: '2,431', growth: '+5%', color: 'green' },
            { label: 'Alertas Logística', val: '2', growth: '-1', color: 'red' },
            { label: 'Tasa de Conversión', val: '3.4%', growth: '+0.2%', color: 'indigo' },
          ].map((s, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 block">{s.label}</span>
              <div className="flex items-end justify-between">
                <span className="text-2xl font-black text-slate-900">{s.val}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${s.growth.includes('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {s.growth}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Table Area */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                <h3 className="font-bold text-slate-900 uppercase text-xs tracking-widest">Marcas Activas</h3>
                <button className="text-xs font-bold text-red-600">Ver Todas</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 text-[10px] uppercase font-bold text-slate-400 border-b border-slate-100">
                    <tr>
                      <th className="px-6 py-4">Marca</th>
                      <th className="px-6 py-4">Mercado</th>
                      <th className="px-6 py-4">Estado</th>
                      <th className="px-6 py-4">Ventas (Mensual)</th>
                      <th className="px-6 py-4"></th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {/* Use content prop instead of broken direct data import */}
                    {content.brands.map(brand => (
                      <tr key={brand.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4 font-bold text-slate-900">{brand.name}</td>
                        <td className="px-6 py-4 text-slate-500">{brand.market}</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] rounded uppercase font-bold">Activo</span>
                        </td>
                        <td className="px-6 py-4 font-medium text-slate-900">€45,200</td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-slate-300 hover:text-slate-600">⚙️</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100">
                <h3 className="font-bold text-slate-900 uppercase text-xs tracking-widest">Publicaciones Recientes</h3>
              </div>
              <div className="p-6 space-y-6">
                {/* Use content prop instead of broken direct data import */}
                {content.blog.map(post => (
                  <div key={post.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <img src={post.image} className="w-12 h-12 rounded object-cover" />
                      <div>
                        <div className="font-bold text-slate-900 text-sm">{post.title}</div>
                        <div className="text-xs text-slate-400">{post.date} • {post.category}</div>
                      </div>
                    </div>
                    <button className="text-xs font-bold text-blue-600 hover:underline">Editar</button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="space-y-8">
            <div className="bg-slate-900 text-white p-8 rounded-xl shadow-xl">
              <h3 className="font-bold uppercase text-[10px] tracking-[0.2em] mb-4 text-slate-400">Expansión</h3>
              <div className="text-xl font-black mb-2">División Exportación</div>
              <p className="text-sm text-slate-400 mb-6">Próximo hito: Integración con logística de Asia (65% completado)</p>
              <div className="w-full bg-slate-800 h-2 rounded-full mb-6 overflow-hidden">
                <div className="bg-red-600 h-full w-[65%]"></div>
              </div>
              <button className="w-full py-3 bg-white text-slate-900 font-black rounded uppercase text-[10px] tracking-widest hover:bg-slate-200 transition-all">
                Ver Roadmap
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="font-bold uppercase text-[10px] tracking-widest mb-6 text-slate-400">Acciones Rápidas</h3>
              <div className="space-y-4">
                <button className="w-full p-4 border border-slate-100 rounded-lg text-left hover:bg-slate-50 transition-colors flex items-center">
                  <span className="mr-3">📊</span>
                  <span className="text-sm font-bold text-slate-700">Generar Reporte Mensual</span>
                </button>
                <button className="w-full p-4 border border-slate-100 rounded-lg text-left hover:bg-slate-50 transition-colors flex items-center">
                  <span className="mr-3">📨</span>
                  <span className="text-sm font-bold text-slate-700">Invitación Socio Local</span>
                </button>
                <button className="w-full p-4 border border-slate-100 rounded-lg text-left hover:bg-slate-50 transition-colors flex items-center">
                  <span className="mr-3">🔐</span>
                  <span className="text-sm font-bold text-slate-700">Configurar Seguridad</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
