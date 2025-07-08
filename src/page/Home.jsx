import ProfileCard from "../components/ProfileCard";
import SkillsCard from "../components/SkillsCard";
import ProjectsCard from "../components/ProjectsCard";
import ContactCard from "../components/ContactCard";

// src/App.jsx หรือ src/pages/Home.jsx
function App() {
  return (
    <div className="pt-20 max-w-7xl mx-auto">
      {/* เผื่อพื้นที่ให้ Navbar ที่ fix ด้านบน */}
   
      <section id="home" className="py-12 px-6">
        <ProfileCard />
      </section>
      <section id="skill" className="py-12 px-6">
        <SkillsCard />
      </section>
      <section id="project" className="py-12 px-6">
        <ProjectsCard />
      </section>
      <section id="contact" className="py-12 px-6">
        <ContactCard />
      </section>
      {/* เพิ่ม section อื่น ๆ ได้ */}
    </div>
 
  );
}

export default App;
