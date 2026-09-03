import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Layout, Lightbulb, CalendarDays, Search } from 'lucide-react';

const navItems = [
  { id: 'beranda', label: 'Beranda', icon: <Home size={20} />, to: '/' },
  { id: 'kerangka', label: 'Kerangka Kerja', icon: <Layout size={20} />, to: '/framework' },
  { id: 'contentplan', label: 'Content Plan', icon: <CalendarDays size={20} />, to: '/content-plan' },
  { id: 'praktikum', label: 'Praktikum', icon: <Lightbulb size={20} />, to: '/workshop' },
];

const Navigation = () => {
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="desktop-nav">
        <div className="desktop-nav-container">
          <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            Digital Skill Up. <span style={{ color: 'var(--text-accent)', fontWeight: 600 }}>by agung_sde</span>
          </div>
          <div className="desktop-nav-links">
            {navItems.map(item => (
              <NavLink
                key={item.id}
                to={item.to}
                style={({ isActive }) => ({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                  background: isActive ? 'var(--bg-secondary)' : 'transparent',
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '0.95rem'
                })}
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation (Top Header) */}
      <nav className="mobile-top-header">
        <NavLink to="/" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 800 }}>
          Digital Skill Up. by agung_sde
        </NavLink>
      </nav>

      {/* Mobile Navigation (Bottom Nav) */}
      <nav className="mobile-nav">
        {navItems.map(item => (
          <NavLink
            key={item.id}
            to={item.to}
            className={({ isActive }) => isActive ? "mobile-nav-item active" : "mobile-nav-item"}
          >
            <div style={{ marginBottom: '4px' }}>
              {React.cloneElement(item.icon, { size: 24 })}
            </div>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </>
  );
};

export default Navigation;
