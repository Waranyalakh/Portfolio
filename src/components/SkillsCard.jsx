
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import javaScriptLogo from "../assets/javascript.png";
import vueLogo from "../assets/vue.png";
import aspLogo from "../assets/NETCore.png";
import microsoftLogo from "../assets/microsoft-sql.svg";

const skills = [
  { src: htmlLogo, alt: "html" },
  { src: cssLogo, alt: "css" },
  { src: javaScriptLogo, alt: "javascript" },
  { src: vueLogo, alt: "Vue" },
  { src: aspLogo, alt: "NETCore" },
  { src: microsoftLogo, alt: "microsoft-sql" },
];

const SkillsCard = () => (
    
  <div className="card bg-gradient-to-br from-base-100 to-base-200 shadow-2xl border border-primary hover:shadow-3xl transition-all duration-300">
    <div className="card-body p-8">
      <div className="flex items-center justify-center mb-2">
        <div className="badge badge-primary badge-lg px-6 py-3">
          <h2 className="text-lg font-bold text-primary-content">ทักษะ</h2>
        </div>
      </div>
      
      <div className="divider divider-primary"></div>
      
      <ul className="grid grid-cols-3 gap-4 justify-items-center mt-4">
        {skills.map(({ src, alt }) => (
          <li key={alt} className="group">
            <div className="avatar">
              <div className="w-30 h-30 rounded-2xl ring ring-primary ring-offset-base-100 ring-offset-2 group-hover:ring-offset-4 transition-all duration-300 bg-base-100 hover:bg-base-100 shadow-lg group-hover:shadow-xl">
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-full rounded-2xl object-contain p-2 group-hover:scale-100 transition-transform duration-300"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default SkillsCard;