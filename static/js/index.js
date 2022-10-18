const speakers = [
  {
    id: 1,
    image: 'static/imgs/speaker1.jpg',
    name: 'David Lawson Clark',
    jop: 'International Public Health and Human Rights Lawyer',
    speech: 'The legal advisor for infant and young child nutrition and expert on the International Code of Marketing of Breast-milk Substitutes at UNICEF.',

  },
  {
    id: 2,
    image: 'static/imgs/speaker2.jpg',
    name: 'DANA ASAAD',
    jop: 'Media Academy Iraq',
    speech: 'Experienced journalist. Currently working as the managing director of Media Academy Iraq and editor in-chief of Awene.com.',

  },
  {
    id: 3,
    image: 'static/imgs/speaker3.jpg',
    name: 'Dr Claire Neill',
    jop: 'Specialty Registrar in Public Health Medicine, Public Health Agency Northern Ireland',
    speech: 'We have a strong interest in infectious disease prevention and have been aware of the impact of breastfeeding on hospitalisation',
  },
  {
    id: 4,
    image: 'static/imgs/speaker4.jpg',
    name: 'Professor Mary Renfrew',
    jop: 'Professor Emeritus, University of Dundee',
    speech: 'V-safe is a smartphone-based tool that uses text messaging give personalized health check-ins after you receive a COVID-19 vaccine.',

  },
  {
    id: 5,
    image: 'static/imgs/speaker5.jpg',
    name: 'CAMELIA NISTOR',
    jop: 'UNITED for Intercultural actions, Romania',
    speech: 'Project that stands for equality, dignity, human rights and diversity. It is a project against hate speech',

  },
  {
    id: 6,
    image: 'static/imgs/speaker6.jpg',
    name: 'H.E MOHAMED SAMEH AMR',
    jop: 'Chairman of the Executive Board of UNESCO, Ambassador and Permanent Delegate of Egypt to UNESCO',
    speech: 'It was elected by the 37th session of the General Conference of UNESCO on 22 November 2013',

  },
];
// All required elements.
const speakerss = document.querySelector('.sectionthree__container__speakers');
// ============================================================================
speakers.forEach((speaker) => {
  speakerss.innerHTML += `
 <div class="sectionthree__container__speakers__speaker">
 <div class="sectionthree__container__speakers__speaker__aside">
   <div
     class="sectionthree__container__speakers__speaker__aside__left"
   >
     <div
       class="sectionthree__container__speakers__speaker__aside__left__responsive"
     >
       <img
         src="${speaker.image}"
         alt="speaker1"
         class="responsive sectionthree__container__speakers__speaker__aside__left__responsive__respo"
       />
     </div>
   </div>
   <div
     class="sectionthree__container__speakers__speaker__aside__right"
   >
     <h3>${speaker.name}</h3>
     <span
       >${speaker.jop}
     </span>
     <p>
       ${speaker.speech}
     </p>
   </div>
 </div>
</div>
 `;
});