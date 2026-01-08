import { Sun, Github, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-solar-slate text-white py-16">
      <div className="container-wide">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-white/10">
                <Sun className="w-6 h-6 text-solar-amber" />
              </div>
              <span className="text-xl font-bold">SolarConfig</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-6">
              Professional solar panel configuration and rooftop visualization tool. 
              Design with precision, visualize with confidence.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Features</h4>
            <ul className="space-y-3">
              {['Roof Drawing', 'Panel Calculator', 'Visualization', 'Configuration'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {['Documentation', 'API Reference', 'Support', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2026 SolarConfig. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
