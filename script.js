const projects = [
  "01_Expanding_Cards",
  "02_Progress_Steps",
  "03_Rotating_Navigation",
  "04_Hidden_Search_Input",
  "05_Blurry_Loading",
  "05_Blurry_Loading",
  "06_Scroll_Animation",
  "07_Split_Landing_Page",
  "08_Form_Input_Wave",
  "08_Form_Input_Wave",
  "09_Sound_Board",
  "10_Dad_Jokes",
  "11_Event_Keycodes",
  "12_FAQ_Collapse",
  "13_Random_Choice_Picker",
  "14_Animated_Navigation",
  "15_Increment_Counter",
  "16_Drink_Water",
  "17_Movie_App",
  "18_Background_Slider",
  "19_Theme_Clock",
  "20_Button_Ripple_Effect",
  "21_Drag_and_Drop",
  "22_Drawing_App",
  "23_Kinetic_Loader",
  "24_Content_Placeholder",
  "25_Sticky_Navbar",
  "26_Vertical_Slider",
  "27_Toast_Notifications",
  "28_Github_Profiles",
  "29_Double_Heart_Click",
  "30_Auto_Text_Effect",
  "31_Password_Generator",
  "32_Good_Cheap_Fast",
  "33_Notes_App",
  "34_Animated_Countdown",
  "35_Image_Carousel",
  "36_Hoverboard",
  "37_Pokedex",
  "38_Mobile_Tab_Navigation",
  "39_Password_Strength_Background",
  "40_3D_Background_Boxes",
  "41_Verify_Account_UI",
  "42_Live_User_Filter",
  "43_Feedback_Design_UI",
  "45_Netflix_Navigation",
  "46_Quiz_App",
  "47_Testimonial_Box",
  "48_Random_Image_Feed",
  "49_Todo_List",
];

const projectsContainer = document.querySelector('.container');

showProjects();

function showProjects() {

  projects.forEach((project) => {

    const projectData = project.split('_');
    const id = projectData.shift();

    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <div class="project-number">${id}</div>
      <p class="project-name">${projectData.join(' ')}</p>
      <a href="${project}"><i class="fas fa-arrow-right"></i></a>
    `;

    projectsContainer.append(card);
  });
}