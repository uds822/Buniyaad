const testimonials = [
  {
    "name": "आलोक कुमार",
    "rank": "बिहार बोर्ड 10वीं (460 अंक)",
    "image": "images/alok.jpeg",
        "fullText": "बुनियाद द फाउंडेशन ने मेरी पढ़ाई को पूरी तरह बदल दिया। जब मैंने यहाँ एडमिशन लिया था, तो मेरी बेसिक्स बहुत कमजोर थीं। लेकिन यहाँ के अनुभवी शिक्षकों ने धैर्यपूर्वक मेरी हर समस्या का समाधान किया। बुनियाद का खास स्टडी मटेरियल और नियमित टेस्ट सीरीज ने मुझे बिहार बोर्ड 10वीं में 460 अंक लाने में मदद की। मैं विशेष रूप से गणित और विज्ञान के डाउट क्लासेस का आभारी हूँ, जहाँ टीचर्स ने हर कॉन्सेप्ट को प्रैक्टिकल उदाहरणों से समझाया। बुनियाद ने न सिर्फ मेरे अंकों में बल्कि मेरे आत्मविश्वास में भी वृद्धि की है।",
      "shortText": "बुनियाद के शिक्षकों और स्टडी मटेरियल ने मेरी कमजोर बेसिक्स को मजबूत बनाया। यहाँ के नियमित टेस्ट और डाउट क्लासेस ने मुझे बिहार बोर्ड में 460 अंक दिलाने में महत्वपूर्ण भूमिका निभाई..."
},
{
  "name": "Vaibhav Kumar",
  "rank": "CBSE 10th (450/500 Marks)",
  "image": "images/vaibhav.jpeg",
  "fullText": "My journey with Buniyaad The Foundation has been nothing short of transformative. When I joined, I was struggling with Science and Mathematics. However, the systematic approach of Buniyaad's faculty and their meticulously designed study material changed everything for me. The chapter-wise tests helped me identify my weak areas, while the weekend doubt sessions ensured all my concepts were crystal clear. What I appreciate most was the personalized attention I received - teachers would often stay back after class to clarify my doubts. The final revision series before boards was exceptionally helpful, covering all important topics and previous year questions. Scoring 450/500 in CBSE 10th wouldn't have been possible without Buniyaad's comprehensive support system and their focus on conceptual clarity over rote learning.",
      "shortText": "Buniyaad's systematic approach and personalized attention transformed my academic performance. Their chapter-wise tests and doubt sessions helped me score 450/500 in CBSE 10th..."
},
{
  "name": "नितेश कुमार",
  "rank": "बिहार बोर्ड 10वीं (430 अंक)",
  "image": "images/nitesh.jpeg",
  fullText: "ब्यानियाद द फाउंडेशन में पढ़ाई करके मैंने बिहार बोर्ड 10वीं में 430 अंक प्राप्त किए। यहाँ के शिक्षकों का समर्पण और व्यक्तिगत ध्यान मेरी सफलता की कुंजी रहा। संस्था की बेहतरीन स्टडी मटेरियल और रेगुलर प्रैक्टिस टेस्ट्स ने मुझे परीक्षा के पैटर्न को समझने में मदद की। मैं ब्यानियाद टीम का आभारी हूँ जिन्होंने मुझे हमेशा प्रोत्साहित किया।",
      shortText: "ब्यानियाद द फाउंडेशन में पढ़ाई करके मैंने बिहार बोर्ड 10वीं में 430 अंक प्राप्त किए। यहाँ के शिक्षकों का समर्पण और व्यक्तिगत ध्यान मेरी सफलता की कुंजी रहा। ..."
},{
  "name": "Piyush Kumar",
  "rank": "CBSE 10th (430/500 Marks)",
  "image": "images/piyush.jpeg",
  "fullText": "Buniyaad The Foundation provided me with the perfect environment to excel in my CBSE 10th boards. What sets Buniyaad apart is their unique teaching methodology - they don't just teach the syllabus, they teach how to learn. The color-coded study material made revision extremely effective, while the regular parent-teacher meetings kept me accountable. I particularly benefited from their stress management workshops before exams, which helped me overcome anxiety. The teachers at Buniyaad don't just focus on academics; they focus on holistic development. Their guidance on answer writing techniques and presentation skills significantly improved my scores. The 430 marks I scored are a testament to Buniyaad's commitment to quality education and student success. I'm grateful for their unwavering support throughout my preparation journey.",
      "shortText": "Buniyaad's holistic approach including stress management workshops and answer writing techniques helped me secure 430/500 in CBSE 10th. Their unique teaching methodology focuses on learning, not just syllabus completion..."
}
  ];
  
  // DOM Elements
  const mainTestimonialImage = document.getElementById('mainTestimonialImage');
  const mainTestimonialText = document.getElementById('mainTestimonialText');
  const mainTestimonialName = document.getElementById('mainTestimonialName');
  const mainTestimonialRank = document.getElementById('mainTestimonialRank');
  const thumbnailsContainer = document.getElementById('thumbnailsContainer');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  let currentIndex = 0;
  let autoSlideInterval;
  
  // Initialize the slider
  function initSlider() {
    updateMainTestimonial();
    createThumbnails();
    startAutoSlide();
  }
  
  // Update main testimonial
  function updateMainTestimonial() {
    const testimonial = testimonials[currentIndex];
    mainTestimonialImage.src = testimonial.image;
    mainTestimonialImage.alt = testimonial.name;
    mainTestimonialText.textContent = testimonial.fullText;
    mainTestimonialName.textContent = testimonial.name;
    mainTestimonialRank.textContent = testimonial.rank;
    
    // Update active thumbnail
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, index) => {
      if (index === currentIndex) {
        thumb.classList.add('active');
      } else {
        thumb.classList.remove('active');
      }
    });
  }
  
  // Create thumbnails
  function createThumbnails() {
    testimonials.forEach((testimonial, index) => {
      const thumbnail = document.createElement('div');
      thumbnail.className = 'thumbnail';
      if (index === 0) thumbnail.classList.add('active');
      
      thumbnail.innerHTML = `
        <p>${testimonial.shortText}</p>
        <div class="student-info">
          <strong>${testimonial.name}</strong>
          <span>${testimonial.rank}</span>
        </div>
      `;
      
      thumbnail.addEventListener('click', () => {
        currentIndex = index;
        updateMainTestimonial();
        resetAutoSlide();
      });
      
      thumbnailsContainer.appendChild(thumbnail);
    });
  }
  
  // Navigation functions
  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateMainTestimonial();
  }
  
  function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateMainTestimonial();
  }
  
  // Auto slide functionality
  function startAutoSlide() {
    autoSlideInterval = setInterval(nextTestimonial, 3000);
  }
  
  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }
  
  // Event listeners
  prevBtn.addEventListener('click', () => {
    prevTestimonial();
    resetAutoSlide();
  });
  
  nextBtn.addEventListener('click', () => {
    nextTestimonial();
    resetAutoSlide();
  });
  
  // Pause auto slide on hover
  document.querySelector('.main-testimonial').addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
  });
  
  document.querySelector('.main-testimonial').addEventListener('mouseleave', () => {
    resetAutoSlide();
  });
  
  document.querySelector('.testimonial-thumbnails').addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
  });
  
  document.querySelector('.testimonial-thumbnails').addEventListener('mouseleave', () => {
    resetAutoSlide();
  });
  
  // Initialize the slider
  initSlider();
  
  //navbar

  