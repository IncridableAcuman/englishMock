import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Reading = () => {
  // Taymer uchun state
  const [timeLeft, setTimeLeft] = useState(3599); // 59:59 sekund
  const [currentPart, setCurrentPart] = useState(0); // Joriy qism
  const [answers, setAnswers] = useState({}); // Javoblarni saqlash
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal oyna holati

  // Taymer logikasi
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer); // Komponent o'chirilganda taymerni tozalash
  }, []);

  // Vaqtni formatlash (mm:ss)
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Qismlar va savollar
  const parts = [
    {
      title: "PART 1",
      instruction: "Fill in each gap with ONE word. You must use a word which is somewhere in the rest of the text.",
      text: "Want your child to be good at sport, make the school team and maybe one day even on the world stage? Well, try to ensure that your would-be Olympian or World Cup winner is born in November, failing that, in October. A study by one of the country’s leading experts on children’s physical activity has found that school pupils in those months were fitter than everyone else in their class. November- and October-born children emerged as fitter, stronger and more powerful than their birthdays fell in April or June. Dr Gavin Sandercock, from the Centre for Sports and Exercise Science at Essex University, and colleagues, that autumn-born children enjoyed 'a clear physical advantage' over their peers.",
      questions: [
        { id: 1, text: "Want your child to be good at sport, make the school team and maybe one day even ___ on the world stage?", input: true },
        { id: 2, text: "A study by one of the country’s leading experts on children’s physical activity has found that school pupils in those months were fitter than ___ in their class.", input: true },
      ],
    },
    {
      title: "PART 2",
      instruction: "Read the texts 7-14 and the statements A-J. Decide which text matches with the situation described in the statements. Each statement can be used ONCE only. There are TWO extra statements which you do not need to use. Mark your answers on the answer sheet. Questions 7-14. Look at the seven job advertisements, A-K, and read the descriptions of people below. Which is the most suitable job for each person? Write the correct letter, A-K.",
      text: "7. HELP – snack bar serving person. Bright, friendly, experience not essential. Energy and enthusiasm are absolute must. Sat & Sun only. Call or drop in at Kingway Centre, Melbourne/Royston. Tel: 01352 3472 and ask for the Manager.\n8. Granta Hotel requires a part-time silver service waiter/waitress. Only applicants with experience and good references need apply. Excellent wages, meals on duty. Tel: 01233 39292.\n9. WANTED from January till July, a nanny/carer for Toby, 3 yrs. Formal qualifications not as important as imaginative approach. Hours 8.30-6.00 Mon-Fri. Car driver essential, non smoker. For further details phone 01440 86006 after 6pm.\n10. Cleaner required for 12-floor modern office block in Station Road area, St Ives. 2 hours per day. Mondays to Fridays - to finish work before the offices open. Wages: £20 per week. Tel: 01233 39292.\n11. Mature, experienced Administrator/Secretary for soft furnishing company, working within the hotel industry. Hours: 1pm - 5pm, Mon - Fri. Phone: Mr S Quinn 01353 71251.\n12. FULL-TIME cook for a newly opened café venture. Good conditions. Pay and hours to be negotiated. Apply Red Café 01863 72062.\n13. 50-Seater Restaurant TO LET. Ideal for very experienced person looking to start up on their own.\n14. FULL-TIME manager who has an experience in hotel management must have studied at overseas university. Working hours: 9:00-18:00.",
      questions: [
        { id: 7, text: "A person with two small children wants a few hours a week of unskilled work in early mornings.", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"] },
        { id: 8, text: "A person with no experience or qualifications who is looking for a short term full-time job, Monday to Friday.", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"] },
        { id: 9, text: "A lively student with no experience who cannot work on weekdays.", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"] },
        { id: 10, text: "A person with more than 20 years’ experience in catering who would like to run a business.", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"] },
        { id: 11, text: "A person with many years’ experience working in hotels who is now looking for well-paid part-time employment in a hotel.", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"] },
        { id: 12, text: "A person with an international experience and at least bachelor’s degree at an international university.", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"] },
        { id: 13, text: "A university graduate with at least two language speaking skills.", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"] },
        { id: 14, text: "A person who worked in a village farm should apply.", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"] },
      ],
    },
    {
      title: "PART 3",
      instruction: "Read the text and choose the correct heading for each paragraph from the list of headings below. There are more headings than paragraphs, so you will not use all of them. You cannot use any heading more than once. Mark your answers on the answer sheet.",
      text: "I Gifted children’s behaviour differs from that of their age-mates. Many gifted children learn to read early, with better comprehension of the nuances of language. As much as half of the gifted and talented population has learned to read before entering school. They can work independently at an earlier age and can concentrate for longer periods. As much as half of the gifted and talented population has learned to read before entering school. They can work independently at an earlier age and can concentrate for longer periods. They like to learn new things, are willing to examine the unusual, and are highly inquisitive.\nII Gifted children’s behaviour differs from that of their age-mates. Many gifted children learn to read early, with better comprehension of the nuances of language. As much as half of the gifted and talented population has learned to read before entering school. They can work independently at an earlier age and can concentrate for longer periods. They like to learn new things, are willing to examine the unusual, and are highly inquisitive.\nIII Social and emotional difficulties are not directly linked to giftedness. Rather, they result from a lack of understanding by the child of the nature of their intellectual difference. Parents and teachers don’t usually discuss this difference with them because of the concern that they may get a ‘swelled head’. The risk is that gifted children may view their differences as weird or ‘bad’ or try to ignore or deny them.\nIV Most of the athletes are allowed to develop their special skills at whatever rate best suits them. No one tries to stop them from becoming much better baseball players or swimmers than their classmates. Yet if an academically gifted child tries to do two years of work in one year, we view it as potentially harmful. Much of the concern focuses on the non-academic areas of these gifted children’s development.",
      questions: [
        { id: 15, text: "Paragraph I", options: ["Tanlang", "Gifted children have no support.", "Special attitude is required.", "Lack of challenge may cause problems.", "Identifying the gifted child.", "Gifted children always become famous.", "Studying from home."] },
        { id: 16, text: "Paragraph II", options: ["Tanlang", "Gifted children have no support.", "Special attitude is required.", "Lack of challenge may cause problems.", "Identifying the gifted child.", "Gifted children always become famous.", "Studying from home."] },
        { id: 17, text: "Paragraph III", options: ["Tanlang", "Gifted children have no support.", "Special attitude is required.", "Lack of challenge may cause problems.", "Identifying the gifted child.", "Gifted children always become famous.", "Studying from home."] },
        { id: 18, text: "Paragraph IV", options: ["Tanlang", "Gifted children have no support.", "Special attitude is required.", "Lack of challenge may cause problems.", "Identifying the gifted child.", "Gifted children always become famous.", "Studying from home."] },
        { id: 19, text: "Paragraph V", options: ["Tanlang", "Gifted children have no support.", "Special attitude is required.", "Lack of challenge may cause problems.", "Identifying the gifted child.", "Gifted children always become famous.", "Studying from home."] },
        { id: 20, text: "Paragraph VI", options: ["Tanlang", "Gifted children have no support.", "Special attitude is required.", "Lack of challenge may cause problems.", "Identifying the gifted child.", "Gifted children always become famous.", "Studying from home."] },
      ],
    },
    {
      title: "PART 4",
      instruction: "Read the following text for questions 21-29. For questions 21-24, choose the correct answer A, B, C, or D. Mark your answers on the answer sheet.",
      text: "GOING TO THE LIBRARY IN THE PAST\nWhen I go into our local library, I often watch children looking at the shelves filled with a variety of brightly coloured books. They pick a book, glance through a few of the pages and then almost immediately reject it before beginning to look at another book. I smile to myself for when I was a child in the 1910s, we were never allowed anywhere near the books. They were kept in some remote corner of the building to which only the librarian had access.\nHow, you may ask, did we manage to choose the book which we wanted to borrow? Well, immediately to the right of the entrance was a room which served two purposes: it was a reading room for the older members of the community and it contained catalogues in alphabetical order of the titles and authors of the books kept in the library. Using these, all one had to do was to write out a list of the books required. However, since most of us knew only a few authors by name, and even fewer book titles, the whole process of borrowing a book was based upon guesses. There was no possibility of looking at the first few pages to help us form an opinion, no looking at illustrations to discover if a book might arouse our interest.\nEven now I recall almost with pain some of the selections my friends and I made. We learned with dismay that titles often gave little guidance as to what the book was about. If we could have returned the book the next day, our irritation would have been considerably reduced.",
      questions: [
        { id: 21, text: "According to the first paragraph, how is life different for children today from life for children in the 1910s?", options: ["A) They always get what they want.", "B) They have a wider choice of books.", "C) They are allowed to behave badly.", "D) They spend more time reading books."] },
        { id: 22, text: "It was difficult for children to know which books to choose because", options: ["A) there was no list of authors.", "B) the illustrations did not interest them.", "C) there were only a few book titles.", "D) they could not see the books in advance."] },
        { id: 23, text: "According to the third paragraph, how did the writer feel about the books?", options: ["A) They were very difficult.", "B) They were boring.", "C) They were only about animals.", "D) They were not what he expected."] },
        { id: 24, text: "What did the writer think about the titles?", options: ["A) They were always correct.", "B) They were not helpful.", "C) They were too long.", "D) They were only in English."] },
      ],
    },
    {
      title: "PART 5",
      instruction: "Read the following text for questions 30-35. For questions 30-33, fill in the missing information in the numbered spaces. Write no more than ONE WORD and/or A NUMBER for each question. For questions 34-35, choose the correct answer A, B, C, or D. Mark your answers on the answer sheet.",
      text: "Location is everything\nThe estate agent’s advice dates back to 3500BC when the first city of trade took off. Our distant ancestors led pretty simple lives. Until around 10,000 BC, all humans were hunter-gatherers and lived as nomadic life, searching endlessly for food. It was the development of agriculture that enabled humans to settle down and live, first as farmers and then as villagers. Around 3500bc, small towns began appearing in Mesopotamia, surrounded by defensive high walls and irrigated fields that fed the town population.\nIn the thousand years that followed, when agriculture had become more of a science and crop yields had risen, fewer people were needed to produce food. People took other jobs, became wealthier and more and more chose to live in towns close to shops and markets. This worked well for centuries. Towns flourished and eventually one, the grandest, Rome, became the world’s first city of more than one million people around 5AD.\nAlthough the fertile lands surrounding Rome could have adequately fed the city, the Roman people began importing food and a became reliant on long supply chains. When Gaiseric the Vandal began withholding vital North African grain supplies from Rome in 455AD, the city’s went into steep decline. The Dark that ensued saw people deserting cities across Europe and returning to the countryside.",
      questions: [
        { id: 30, text: "Our ancestors who lived 100 centuries ago had a challenging task of looking for ___", input: true },
        { id: 31, text: "Thanks to ___, ancient people started living in a certain place.", input: true },
        { id: 32, text: "Agriculture began to be not very popular job as time passed by, and people took other jobs which made them even ___", input: true },
        { id: 33, text: "___ was the center where over million residents lived.", input: true },
        { id: 34, text: "Which city was built on unsuitable land but has developed into a major world city?", options: ["A) Bruges", "B) St Petersburg", "C) Calcutta"] },
        { id: 35, text: "What happened to Rome after the Vandals stopped the grain supply?", options: ["A) It became richer.", "B) It grew larger.", "C) It declined.", "D) It was abandoned."] },
      ],
    },
  ];

  // Javobni saqlash
  const handleAnswerChange = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  // Keyingi qismga o'tish
  const handleNextPart = () => {
    if (currentPart < parts.length - 1) {
      setCurrentPart(currentPart + 1);
    }
  };

  // Oldingi qismga qaytish
  const handlePreviousPart = () => {
    if (currentPart > 0) {
      setCurrentPart(currentPart - 1);
    }
  };

  // Modal oynani ochish
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const currentPartData = parts[currentPart];

  return (
    <div className="container mx-auto p-6 flex">
      {/* Chap qism: Matn va ko'rsatmalar */}
      <div className="w-1/2 pr-4">
        <h2 className="text-xl font-bold mb-4">{currentPartData.title}</h2>
        <p className="text-gray-700 mb-4">{currentPartData.instruction}</p>
        <p className="text-gray-700 mb-4 whitespace-pre-wrap">{currentPartData.text}</p>
        <div className="flex space-x-2">
          <Link to="/" className="bg-orange-500 text-white px-4 py-2 rounded">
            Chiqish
          </Link>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
            Javob
          </button>
          <button
            onClick={handlePreviousPart}
            disabled={currentPart === 0}
            className={`bg-blue-500 text-white px-4 py-2 rounded ${
              currentPart === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Oldingi
          </button>
          <button
            onClick={handleNextPart}
            disabled={currentPart === parts.length - 1}
            className={`bg-blue-500 text-white px-4 py-2 rounded ${
              currentPart === parts.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Keyingi
          </button>
        </div>
      </div>

      {/* O'ng qism: Savollar */}
      <div className="w-1/2 pl-4">
        <button className="mb-4 bg-blue-500 text-white px-4 py-2 rounded">
          Blaknot ochish
        </button>
        {currentPartData.questions.map((question) => (
          <div key={question.id} className="mb-4">
            {question.options ? (
              <div>
                <p className="text-gray-700 mb-2">
                  <span className="bg-blue-500 text-white rounded-full h-6 w-6 inline-flex items-center justify-center mr-2">{question.id}</span>
                  {question.text}
                </p>
                {question.options.map((option, idx) => (
                  <label key={idx} className="block mb-1">
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={option}
                      checked={answers[question.id] === option}
                      onChange={() => handleAnswerChange(question.id, option)}
                      className="mr-2"
                    />
                    {option}
                  </label>
                ))}
              </div>
            ) : (
              <p className="text-gray-700 mb-2">
                <span className="bg-blue-500 text-white rounded-full h-6 w-6 inline-flex items-center justify-center mr-2">{question.id}</span>
                {question.text}
                <input
                  type="text"
                  className="border-b w-20 p-1 ml-2"
                  value={answers[question.id] || ''}
                  onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                />
              </p>
            )}
          </div>
        ))}
        <div className="flex justify-between items-center mt-6">
          <div className="text-lg font-semibold">{formatTime(timeLeft)}</div>
          <button
            onClick={openModal}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Topshirish
          </button>
        </div>
      </div>

      {/* Modal oyna */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-bold mb-4">READING testini topshirasizmi?</h3>
            <p className="text-gray-700 mb-2">
              Siz 35 ta savolga javob berishingiz kerak.
            </p>
            <p className="text-gray-700 mb-4">
              Buning uchun sizga 60 daqiqa vaqt beriladi.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={closeModal}
                className="text-gray-500 hover:underline"
              >
                Bekor qilish
              </button>
              <Link
                to="/final"
                onClick={closeModal}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Topshirish
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reading;