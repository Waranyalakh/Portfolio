import photo from "/img1.png";

const ProfileCard = () => (
   <div className="card bg-gradient-to-br from-base-100 to-base-200 shadow-2xl border border-primary hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="card-body items-center text-center p-8">
      <div className="avatar mb-2">
        <div className="w-36 h-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4 shadow-xl">
          <img
            src={photo}
            alt="วรัญญา หล้าคอม"
            className=" object-cover"
          />
        </div>
      </div>
      

      
      <h1 className="text-3xl font-bold text-yellow bg-clip-text  mb-4">
        นางสาว วรัญญา หล้าคอม
      </h1>
      
      <div className="divider divider-primary w-100 mx-auto mb-6"></div>
      
      <div className="bg-base-200 rounded-2xl p-6 shadow-inner">
        <p className="text-base text-base-content leading-relaxed">
          สวัสดีค่ะ ดิฉันชื่อนางสาว วรัญญา หล้าคอม ค่ะ 😊
          <br />
          <br />
          ดิฉันมีความตั้งใจที่จะเป็นนักพัฒนาซอฟต์แวร์มืออาชีพ โดยเน้นด้าน
          Front-end เป็นหลัก และมีพื้นฐาน Back-end ด้วยค่ะ
          มีประสบการณ์ในการพัฒนาเว็บไซต์ด้วย Vue.js, HTML และ ASP.NET
          พร้อมการเชื่อมต่อฐานข้อมูล SQL Server จากการทำโปรเจกต์ต่าง ๆ
          ถนัดงานฝั่งผู้ใช้ (Front-end) และเข้าใจการทำระบบ CRUD
          เพื่อจัดการข้อมูลได้อย่างมีประสิทธิภาพ
          <br />
          <br />
          ด้วยความใฝ่รู้ ดิฉันเรียนรู้เทคโนโลยีใหม่ ๆ อย่างต่อเนื่อง
          เพื่อพัฒนาแอปพลิเคชันทั้งฝั่ง Front-end และ Back-end ได้ดียิ่งขึ้น
          ดิฉันเชื่อว่าทักษะที่มีจะช่วยสนับสนุนการทำงานและสร้างประโยชน์ให้กับองค์กรได้อย่างเต็มความสามารถค่ะ
        </p>
      </div>
    </div>
  </div>
);

export default ProfileCard;
