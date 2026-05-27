// สร้างไฟล์ header.js
document.write(`
    <header class="<header class="glass-header fixed top-0 left-0 w-full z-50">

<div class="max-w-[1700px] mx-auto px-3 lg:px-6">

<div class="flex items-center justify-between h-[82px]">

<!-- LOGO -->

<a href="index.html"
class="flex items-center gap-3 shrink-0">

<img
  src="https://img2.pic.in.th/logo_lomkao2-no-BG.png"
  alt="logo"
  class="w-[52px] h-[52px] object-contain rounded-full border border-slate-200">

<div class="leading-tight hidden sm:block">

<h1 class="text-primary font-extrabold text-[18px] lg:text-[20px] tracking-[-0.3px]">
โรงพยาบาลสมเด็จพระยุพราชหล่มเก่า
</h1>

<p class="text-[11px] text-slate-500 uppercase tracking-[1.5px] font-semibold">
LOMKAO CROWN PRINCE HOSPITAL
</p>

</div>

</a>

<!-- DESKTOP MENU -->

<nav class="desktop-menu hidden xl:flex items-center gap-9 text-[14px] font-semibold text-slate-600">

<!-- HOME -->

<a href="index.html"
class="flex flex-col items-center gap-1 text-primary relative">

<span class="material-symbols-outlined text-[22px]">
home
</span>

<span>
หน้าแรก
</span>

<span class="absolute -bottom-[18px] w-full h-[3px] bg-primary rounded-full"></span>

</a>

<!-- ABOUT -->

<div class="dropdown">

<button class="flex flex-col items-center gap-1 hover:text-primary transition">

<span class="material-symbols-outlined text-[22px]">
groups
</span>

<div class="flex items-center gap-1">

<span>
เกี่ยวกับเรา
</span>

<span class="material-symbols-outlined text-[16px]">
expand_more
</span>

</div>

</button>

<div class="dropdown-menu">

<a href="about-history.html">
ประวัติความเป็นมา
</a>

<a href="about-vision.html">
วิสัยทัศน์ / พันธกิจ
</a>

<a href="about-executives.html">
คณะผู้บริหาร
</a>

</div>

</div>

<!-- SERVICES -->

<div class="dropdown">

<button class="flex flex-col items-center gap-1 hover:text-primary transition">

<span class="material-symbols-outlined text-[22px]">
medical_services
</span>

<div class="flex items-center gap-1">

<span>
บริการของเรา
</span>

<span class="material-symbols-outlined text-[16px]">
expand_more
</span>

</div>

</button>

<div class="dropdown-menu">

<a href="services.html">
บริการทางการแพทย์
</a>

<a href="doctors.html">
ค้นหาแพทย์
</a>

<a href="specialists.html">
ศูนย์เฉพาะทาง
</a>

</div>

</div>

<!-- NEWS -->

<div class="dropdown">

<button class="flex flex-col items-center gap-1 hover:text-primary transition">

<span class="material-symbols-outlined text-[22px]">
description
</span>

<div class="flex items-center gap-1">

<span>
ข้อมูลข่าวสาร
</span>

<span class="material-symbols-outlined text-[16px]">
expand_more
</span>

</div>

</button>

<div class="dropdown-menu">

<a href="news.html">
ข่าวประชาสัมพันธ์
</a>

<a href="articles.html">
บทความสุขภาพ
</a>

</div>

</div>

<!-- ANNOUNCE -->

<div class="dropdown">

<button class="flex flex-col items-center gap-1 hover:text-primary transition">

<span class="material-symbols-outlined text-[22px]">
campaign
</span>

<div class="flex items-center gap-1">

<span>
ประกาศ
</span>

<span class="material-symbols-outlined text-[16px]">
expand_more
</span>

</div>

</button>

<div class="dropdown-menu">

<a href="procurement.html">
จัดซื้อจัดจ้าง
</a>

<a href="jobs.html">
รับสมัครงาน
</a>

</div>

</div>

<!-- CONTACT -->

<a href="contact.html"
class="flex flex-col items-center gap-1 hover:text-primary transition">

<span class="material-symbols-outlined text-[22px]">
call
</span>

<span>
ติดต่อเรา
</span>

</a>

</nav>

                <!-- RIGHT -->

                <div class="flex items-center gap-3">

                    <a href="tel:1669"
                    class="bg-error text-white px-5 py-3 rounded-2xl font-bold shadow-lg hover:scale-105 transition">

                        ฉุกเฉิน 1669

                    </a>

                    <a href="donate.html"
                    class="hidden sm:flex bg-secondary text-white px-5 py-3 rounded-2xl font-bold shadow-lg hover:scale-105 transition">

                        บริจาค

                    </a>

                    <!-- MOBILE BUTTON -->

                    <button
                    onclick="toggleMenu()"
                    class="lg:hidden w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center">

                        <span class="material-symbols-outlined">
                            menu
                        </span>

                    </button>

                </div>

            </div>

            <!-- MOBILE MENU -->

            <div id="mobileMenu" class="mobile-menu lg:hidden">

                <div class="pb-5 flex flex-col gap-2">

                    <a href="index.html"
                    class="bg-primary text-white px-4 py-3 rounded-xl">

                        หน้าแรก

                    </a>

                    <a href="history.html"
                    class="bg-white border px-4 py-3 rounded-xl">

                        เกี่ยวกับเรา

                    </a>

                    <a href="medical-service.html"
                    class="bg-white border px-4 py-3 rounded-xl">

                        บริการของเรา

                    </a>

                    <a href="news.html"
                    class="bg-white border px-4 py-3 rounded-xl">

                        ข่าวสาร

                    </a>

                    <a href="contact.html"
                    class="bg-white border px-4 py-3 rounded-xl">

                        ติดต่อเรา

</a>

</div>

</div>

</div>

</header>">
       </header>
`);