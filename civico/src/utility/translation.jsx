import { Tag } from "@chakra-ui/react";
import { DataTags } from "../elements/DataTag";

export let translation = {
  en: {
    "uscis.website.instructions.one": `This answer changes over time. Visit`,
    "uscis.website.instructions.two": `to learn the current answer.`,
    "chatcom.instructions.1":
      "Generate a useful, friendly and professional lecture with javascript coding examples in",
    "chatcom.instructions.2": "for beginners on the following question/answer:",
    "button.pickedup": "Picked up",
    "toast.title.keysCopied": "Keys copied.",
    "toast.title.chatDataCopied": "Opening ChatGPT...",
    "toast.description.chatDataCopied":
      "Paste the data in the following chat to learn more.",
    "toast.description.keysCopied":
      "Your keys have been copied to the clipboard.",
    "toast.title.addressCopied": "Lightning address copied.",
    "toast.description.addressCopied":
      "Your lightning address has been copied.",
    "landing.welcome": "Civico",
    "landing.introduction": (
      <div>
        It's time to overcome the challenge.
        <br />
        Use intelligent assistance to work through 100+ civics questions.
      </div>
    ),
    "landing.button.telemetry": "Create Account",
    "landing.button.signIn": "Sign In",
    "createAccount.instructions":
      "All we need is a user name & we'll do the rest!",
    "createAccount.input.placeholder": "Enter a user name",
    "button.back": "Back",
    "button.create": "Create",
    "button.save": "Save",
    "button.close": "Close",
    "createAccount.isLoading": "Creating...",

    "createAccount.isCreating": "Creating account... 1/3",
    "createAccount.isCreatingProfile": "Creating profile... 2/3",
    "createAccount.isCreatingProfilePicture": "Creating profile picture...3/4",
    "createAccount.isCreatingIntroPost":
      "Creating community #introductions post... 3/3",
    "nostrContent.answeredQuestion.1": "I just completed question",
    "nostrContent.answeredQuestion.2": "with a grade of",
    "nostrContent.answeredQuestion.3": "on",
    "nostrContent.onboardedProfileAbout":
      "A student onboarded with Robots Building Education",
    "nostrContent.introductionPost":
      "gm nostr! I'm here from Tiktok after creating an account with https://civico.app where I can learn about civics, citizenship and legal literacy with AI. Looking forward to meeting folks in the cypherpunk community! #introductions #LearnWithNostr",

    "createAccount.successMessage": "That's it!",
    "createAccount.awareness":
      "Your account now works on a number of decentralized apps. Use your key to sign into apps like ",
    "createAccount.roxLink": "Rox the learning assistant",
    or: "or",
    "createAccount.primalLink": "with Primal, the social wallet",
    "button.copyKey": "Copy Key",
    "createAccount.checkbox.disclaimer":
      "I understand that my key allows me to sign into different apps that may contain important and private data like Bitcoin. I have safely stored my keys.",
    "createAccount.button.launchApp": "Launch App",
    "signIn.instructions": "Enter your nostr secret key",
    "signIn.input.placeholder": "Enter your secret key",
    "button.dismiss": "Dimiss",
    "app.progress": "progress",
    "app.streak": "streak",
    "app.button.answer": "Answer",
    "app.button.nextQuestion": "Next Question",
    "app.button.voiceToText": "Voice To Text",
    "app.button.voiceToAI": "Request Intelligent Assistance",
    "app.button.learn": "Learn",
    "app.listening": "Listening...",
    "app.input.placeholder": "Type your response or use voice",
    "settings.title": "Settings",
    "settings.selfPace": "Self-pace",
    "settings.button.selfPace": "Self-pace",
    "settings.button.adaptiveLearning": "Adaptive Learning",
    "settings.button.bitcoinMode": "Wallet",
    "settings.button.tutor": "Open Tutor",
    "settings.button.tutorGPT": "Open Tutor (GPT)",
    "settings.button.socialWallet": "Decentralize",
    "settings.button.yourTutor": "Your Tutor",
    "settings.button.civilRightsAI": "Civil Rights Assistant",

    "settings.button.yourProfile": "Your Profile",
    "settings.button.nostrApps": "App Collection",
    "settings.button.patreon": "Subscription",
    "settings.button.studyGuide": "Study Guide",
    "settings.button.feedback": "Feedback",
    "settings.button.signOut": "Sign Out",
    "modal.title.decentralizedTranscript": "Decentralized Transcript",
    "modal.title.selfPace": "Self-pace",
    "modal.selfPace.instruction":
      "Choose how much time can elapse to grow your streak.",
    "modal.selfPace.day": "day",
    "modal.selfPace.hour": "hour",
    "modal.selfPace.minute": "minute",
    "modal.selfPace.mode": "mode",
    "modal.selfPace.mode.casual": "casual",
    "modal.selfPace.mode.grind": "grind",
    "modal.selfPace.mode.motivated": "motivated",
    "modal.adaptiveLearning.title": "Adaptive Learning",
    "modal.adaptiveLearning.recommendButton": "Recommend what to study next",
    "modal.adaptiveLearning.stepsTaken": "Steps taken",
    "modal.bitcoinMode.title": "Bitcoin Wallet",
    "modal.bitcoinMode.instructions":
      "Scan the QR code with Cash App to deposit Bitcoin. This is a test feature that will deposit $0.01 worth of Bitcoin to show that you can create scholarships by using and learning with the app.",
    "modal.bitcoinMode.copyAddressButton": "Copy Address",
    "modal.bitcoinMode.rechargeButton": "Generate Address",
    "modal.bitcoinMode.successMessage": "You're now using Bitcoin!",
    "modal.bitcoinMode.cardNameLabel": "Bitcoin Deposit Card",
    "modal.bitcoinMode.balanceLabel": "Balance",
    "modal.bitcoinMode.testCashTapButton": "Test cash tap",
    "modal.openTutor.title": "Open Tutor",
    "modal.openTutor.instructions": "Don't forget your keys before leaving!",
    "modal.openTutor.startButton": "Start Tutoring App",
    "modal.openSocialWallet.title": "Decentralize",
    "modal.openSocialWallet.instructions":
      "Don't forget your keys before leaving!",
    "modal.openSocialWallet.startButton": "Go To Social Wallet",
    "modal.learn.title": "Learn",
    "modal.learn.instructions":
      "Give us a few seconds to create quick lesson notes.",
    "modal.feedback.title": "Submit Feedback",
    "modal.feedback.contactLabel": "Contact",
    "modal.feedback.contactPlaceholder": "Enter your contact info",
    "modal.feedback.messageLabel": "Message",
    "modal.feedback.messagePlaceholder": "Enter your feedback",
    "modal.feedback.submitButton": "Submit",
    "modal.feedback.cancelButton": "Cancel",
    "toast.feedbackSubmittedTitle": "Feedback submitted.",
    "toast.feedbackSubmittedDescription": "Thank you for your feedback!",
    "toast.feedbackErrorTitle": "Error submitting feedback.",
    "toast.feedbackErrorDescription":
      "An error occurred while submitting your feedback. Please try again.",
    "mockTerminal.welcomeMessage":
      "Welcome to the mock terminal. Use basic commands to navigate the file system.",
    "mockTerminal.userName": "user@mock-terminal",
    "mockTerminal.bashCommand": "bash:",
    "mockTerminal.commandNotFound": "command not found",
    "mockTerminal.cdCommand": "cd:",
    "mockTerminal.noSuchFileOrDirectory": "no such file or directory",
    "mockTerminal.mkDirCommand": "mkDir:",
    "mockTerminal.cannotCreatDirectory": "cannot create directory",
    "mockTerminal.fileExists": "File exists",
    "mockTerminal.catCommand": "cat:",
    "mockTerminal.noSuchFile": "No such file",
    "mockTerminal.help":
      "Available commands: help, clear, ls, cat, mkdir, cd, pwd, echo, printenv, whoami",
    "mockTerminal.directory": "Directory",
    "badBrowser.header": "⚠️ Unsupported Browser",
    "badBrowser.bodyOne":
      "This platform makes use out of speech recognition to prompt AI to write code vocally on mobile devices. The",
    "badBrowser.bodyTwo":
      "browser does not support these features since they develop non-standard in-app browsers. On the brightside, the alternative allows you to download the page as an app on your phone!",
    "badBrowser.bodyThree": "Simply",
    "badBrowser.stepOne":
      "Open this page in your browser with the More Options button",
    "badBrowser.stepTwo": "Press the Share button",
    "badBrowser.stepThree": "Press the Add To Homescreen button",
    "badBrowser.footer":
      "That's it! You don't need to download the app through an app store because we're using open-source standards for Progressive Web Apps.",
    "about.about": (
      <div>
        The point of AI is to save you time and energy. At the same time, real
        education is about challenging yourself so that you can create real
        knowledge. In short, you'll work through 100+ questions and it will
        introduce you to building your ideas with software, learning computer
        science and creating opportunities for yourself with good technology.
        <br />
        <br />
        I also want to teach you quickly, effectively and in a similar fashion
        to you having to pick up the skills on the job. At the end of the day, a
        software entrepeneur needs to learn about business, engineering,
        investing, marketing, sales, design and a number of other well-rounded
        skills in order to be successful, which is what we try to prepare you
        here with.
        <br />
        <br />
        There are many things beyond coding taught on RO.B.E, ranging from the
        psychology of self-esteem, to the development of startups distributed
        globally. You are encouraged to imagine, think big and work hard in
        order to find success here.
        <br />
        <br /> Civico is a service created by Robots Building Education, a
        platform founded on researching technology the following three
        priorities:
        <br /> <br />
        1. Every student should have access to many good teachers.
        <br />
        2. Online education should be the best education.
        <br />
        3. Learning creates scholarships.
        <br />
        <br />
        This is accomplished with the human-computer interaction discipline,
        which researches how to make technology more useful and meaningful. I
        personally revise anything done with AI to add human touch to it as to
        not offer cheap generated material but a genuine delivery of good
        quality education.
        <br />
        <br />
        The following are all the features and benefits you'll find across the
        platform which are typically free. As of now I just ask folks to
        optionally sign up for $10 to access more content around
        entrepreneurship, finance, and engineering to the work and to create a
        stronger network.
        <br />
        <br />
        Why so low for so much? I love education technology and I want to work
        on this platform until you feel it's worth supporting. I also believe
        that social media helps me reach so many people that keeping it low
        price is only fair. I would eventually like to explore teaching folks so
        we can create a pipeline to access more capital from folks eager to
        invest in diverse technology businesses.
        <br />
        <br />
        <a
          style={{ textDecoration: "underline" }}
          href="https://patreon.com/notesandotherstuff"
          target="_blank"
        >
          https://patreon.com/notesandotherstuff
        </a>
      </div>
    ),
    "button.about": "About",
    "about.featuresHeader": "Features",

    "about.title": "What is this?",
    "about.title.programAiApp": "App: Civico",
    "about.platform.programAiApp": (
      <div>
        Civico is a series of 100 questions meant to be easily integrated into
        social media with AI. The goal is to make access to education easier
        while also making it possible to learn skills like coding on mobile
        devices with useful AI features.
        <br />
        <br />
      </div>
    ),

    "about.platform.rox": (
      <div>
        Rox is a hand crafted teaching assistant that delivers lectures or
        courses on the material that informs the questions inside of Program AI
        App experience. Although robotic looking, it's mostly me doing the
        majority of the teaching. Once the main product, now a feature connected
        to Civico.
      </div>
    ),
    "about.platform.roxGPT": (
      <div>
        The ChatGPT version of the applications - a chat assistant armed by the
        information and content found on Robots Building Education.
      </div>
    ),
    "about.platform.Patreon": (
      <div>
        A content & community platform to help you stay in touch via email over
        deeper material into technology, education, entrepreneurship, investing
        and other important skills.
      </div>
    ),
    "about.title.rox": "App: Rox",
    "about.title.roxGPT": "App: Rox GPT",
    "about.title.Patreon": "App: Patreon",

    "about.title.decentralizedIdentity": "Decentralized Identity",
    "about.title.spanishMode": "Spanish Mode",
    "about.title.streaks": "Streaks",
    "about.title.quizSeries": "Quiz Series",
    "about.title.vocalCoding": "Vocal Coding",
    "about.title.aiLectureNotes": "AI Lecture Notes",
    "about.title.aiFeedback": "AI Feedback",
    "about.title.adaptiveLearning": "Adaptive Learning",
    "about.title.bitcoinWallet": "Bitcoin Wallet",
    "about.title.customerService": "Customer Service",
    "about.title.lectures": "Hand Crafted Lectures",
    "about.title.conversationQuiz": "Conversation Quiz",
    "about.title.schedulingAssistant": "Scheduling Assistant",
    "about.title.shop": "Shop",
    "about.title.algorithmHelper": "Algorithm Helper",
    "about.title.emotionalIntelligence": "Emotional Intelligence",
    "about.title.syllabus": "Syllabus",
    "about.title.guides": "Guides",
    "about.title.insights": "Insights",
    "about.title.ofi": "Old-fashioned Intelligence",

    "about.title.smartCards": (
      <div>
        <DataTags isNew /> Smart Cards
      </div>
    ),
    "about.feature.decentralizedIdentity": (
      <div>
        <DataTags isRox isProgramAI />
        Robots Building Education leverages decentralized identities to allow
        for cross-platform accounts and data ownership. This allows us to
        integrate our apps directly inside of social media. All we need is a
        simple user name and we'll create keys that let you access the bridge
        into the decentralized world.
      </div>
    ),
    "about.title.decentralizedTranscripts": "Cross-platform Transcripts",
    "about.feature.smartCards": (
      <div>
        <DataTags isProgramAI />
        Smart card is an intelligent flashcard feature that creates new practice
        questions based on your progress. You can keep practicing problems at
        the same difficulty and knowledge level before continuing to the next
        question.
      </div>
    ),
    "about.feature.decentralizedTranscripts": (
      <div>
        <DataTags isRox isProgramAI />
        Making progress on either app will award you transcript badges that you
        can carry cross-platform to other apps. This makes online education more
        awesome and representative of effort.
      </div>
    ),
    "about.feature.spanishMode": (
      <div>
        <DataTags isProgramAI />
        Civico is available in Spanish. You're welcome to learning in Spanish to
        practice your human language skills too!
      </div>
    ),
    "about.feature.streaks": (
      <div>
        <DataTags isProgramAI />A self-pacing feature to help you stay
        discplined. Set up 30 minute to 3 day timers!
      </div>
    ),
    "about.feature.quizSeries": (
      <div>
        <DataTags isProgramAI />
        100 questions informed by the rox teaching assistant, paired with a
        number of features to introduce you to new concepts and challenges.
      </div>
    ),
    "about.feature.vocalCoding": (
      <div>
        <DataTags isProgramAI />
        The ability to record your answer vocally so that AI can transform your
        request into code on mobile devices.
      </div>
    ),
    "about.feature.aiLectureNotes": (
      <div>
        <DataTags isProgramAI />
        Each question comes with the ability to generate lecture notes so that
        you can learn more about the question as you're introduced to a new
        challeng.
      </div>
    ),
    "about.feature.aiFeedback": (
      <div>
        <DataTags isProgramAI />
        Each question is graded by AI before allowing you to continue to the
        next question.
      </div>
    ),
    "about.feature.adaptiveLearning": (
      <div>
        <DataTags isProgramAI isRox />A feature that keeps track of your
        progress and suggests the next best challenge to learn.
      </div>
    ),
    "about.feature.bitcoinWallet": (
      <div>
        <DataTags isProgramAI isRox />
        An experimental feature that lets mee easily monetize interactions with
        the apps rather than bundling it behind subscriptions. Right now you can
        only deposit $0.02 so that each interaction costs about $0.0008 USD per
        interaction. All you need is a Cash App and youll be easily able to
        deposit for use!
      </div>
    ),
    "about.feature.customerService": (
      <div>
        <DataTags isPatreon />
        With enough support, I'm able to run more personal service with remote
        calls, tutoring and other direct-to-student effort. Currently this
        feature is turned off until further notice and handled with discretion.
      </div>
    ),
    "about.feature.lectures": (
      <div>
        <DataTags isRox />A collection of lectures that I believe are high value
        created with high quality animation and effort. The experience is an
        introduction to advanced concepts done in a way to inspire confidence
        into a journey of learning.
      </div>
    ),
    "about.feature.conversationQuiz": (
      <div>
        <DataTags isRox isProgramAI />A quiz feature where your conversation
        with AI can be graded.
      </div>
    ),
    "about.feature.schedulingAssistant": (
      <div>
        <DataTags isRox isPatreon />A feature to help you schedule your learning
        on a micro and macro level.
      </div>
    ),
    "about.feature.shop": (
      <div>
        <DataTags isRox isPatreon /> The ability to shop for books to deepen
        your knowledge across domains.
      </div>
    ),
    "about.feature.algorithmHelper": (
      <div>
        <DataTags isRox />A feature that help you train your understanding of
        algorithms with decision-making patterns, code assistance and feedback
      </div>
    ),
    "about.feature.emotionalIntelligence": (
      <div>
        {" "}
        <DataTags isRox isPatreon />
        An emotion tracking feature centered around self-esteem.
      </div>
    ),
    "about.feature.syllabus": (
      <div>
        <DataTags isPatreon />A challenging getting started kit for short term
        and long term knowledge gains.
      </div>
    ),
    "about.feature.guides": (
      <div>
        <DataTags isPatreon />
        Higher intent essays and software on investments and software
        development{" "}
      </div>
    ),
    "about.feature.insights": (
      <div>
        {" "}
        <DataTags isPatreon />
        Behind the scenes access to the development of Robots Building Education
      </div>
    ),
    "about.feature.ofi": (
      <div>
        <DataTags isPatreon />
        Paid (but inexpensive) content for post-platform learning. Developed
        with the intention to attempt to produce a significant return on
        investment for supporting the platform.
      </div>
    ),
    "button.addToConversation": "Add To Conversation",
    "button.subjectsCovered": "Subjects Covered",
    "link.connectWithMe": "Connect with me!",
    "tags.grade": "Grade: ",
    "Civico Tutorial": "Civico Tutorial",
    "Basics of Coding": "Basics of Coding",
    "Object-Oriented Programming": "Object-Oriented Programming",
    "Frontend Development": "Frontend Development",
    "Backend Engineering Fundamentals": "Backend Engineering Fundamentals",
    "Creating Apps & Experiences": "Creating Apps & Experiences",
    "Computer Science": "Computer Science",
    "Introduction to Engineering": "Introduction to Engineering",
    "Programming Fundamentals": "Programming Fundamentals",
    "Frontend Software Engineering": "Frontend Software Engineering",
    "Backend Software Engineering": "Backend Software Engineering",
    "Data Structures & Algorithms": "Data Structures & Algorithms",
    "Full-stack Software Engineering": "Full-stack Software Engineering",
    "Psychology of Self-esteem": "Psychology of Self-esteem",
    "Philosophy of Critical Theory & Technology":
      "Philosophy of Critical Theory & Technology",
    "Human-Computer Interaction": "Human-Computer Interaction",
    "Business Writing": "Business Writing",
    "Introduction to Finance": "Introduction to Finance",
    "modal.decentralizedTranscript.youEarned": "You earned",
    "modal.decentralizedTranscript.awareness":
      "These awards can be transferred to other platforms like",
    "modal.decentralizedTranscript.awardsEarned": "Awards Earned",
    loading: "Loading...",
    "settings.button.transcript": "Transcript",
    "modal.transcript.instructions": "",
    yourID: "Your ID",
    noTranscriptFound: "No older transcripts awards were found.",
    chapter: "chapter",
    tutorial: "Tutorial",
    congratulations: "Congratulations!",
    "congrats.message":
      "You have completed the quiz. You should be proud because most people don't get this far. You are genuinely exceptional. Well done!",
    "congrats.connect": "Connect with everyone that has finished",
    advice: "My Advice",
    "advice.content": (
      <div>
        This platform will help you learn fast and effectively, but it is also
        designed to challenge you. Real education can be uncomfortable and you
        have to embrace failure, mistakes and the improvement process. This
        platform isn't designed to be like Tiktok or Duolingo, where the
        material is handed to you in a way to maximize engagement, it's meant
        for you to learn and grow using the power of AI. In short, doing things
        the gritty way is often more enjoyable and meaningful. If you come
        across something confusing or tough, work through it! You'll be grateful
        you did.
        <br />
        <br />
        This platform comes with a tutor called Rox that will provide
        introductory video lectures that are handcrafted and animated to arm you
        with knowledge before or after practicing the questions involved in each
        chapter. Each lecture starts by working backwards, so that you can get
        used to appreciating challenge-oriented learning.
      </div>
    ),
    "passcode.instructions": (
      <div>
        Hey! You'll need to subscribe to the Robots Building Education Patreon
        in order to access the rest of the experience.
        <br />
        <br />
        <div style={{ fontSize: "0.95rem" }}>
          Don't worry, it's super affordable, packed with{" "}
          <b>
            <i>tons</i>
          </b>{" "}
          of value and refund friendly. Feel welcome to share the passcode with
          your friends or family! I made sure that it's worth every penny and
          you'll get a great return on investment for your time, energy and
          money. Subscribing helps us keep the lights on and generate
          scholarships with learning.
        </div>
        <br />
        <a
          style={{
            fontSize: "0.95rem",
            textDecoration: "underline",
            color: "#63b3ed",
            fontWeight: "bold",
          }}
          href="https://www.patreon.com/posts/syllabus-getting-86153437?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_creator&utm_content=join_link"
          target="_blank"
        >
          Subscribe &amp; get the passcode
        </a>
      </div>
    ),
    "passcode.label": "Enter passcode",
    "email.donotdelete": "Data about the question, do not delete pls 🙏🙏🙏",
    "email.question": "Question",
    thinking: "Thinking...",
    "prompt.passcode":
      "Enter the subscriber passcode in order to enable AI features. The subscription platform can be found in the settings menu.",
    "prompt.invalid_passcode": "Invalid passcode!",
    "lockout.message": "You've reached the maximum number of attempts.",
    "lockout.suggestion":
      "Please take a 15-minute break or study the material before trying again.",
    "lockout.timer": "Time remaining",
    "lockout.toastTitle": "Locked Out",
    "lockout.toastDescription":
      "You've been locked out for 15 minutes due to multiple incorrect attempts.",
    "lockout.attempts": "Incorrect attempts",
    "lockout.outOf": "out of",
    "lockout.message":
      "We've gotten the problem wrong 5 times in a row! Let's slow down, take a quick 15 minute break and rethink our strategy.",
    "ai.error": "Error formatting AI response",
    "label.new": "New!",
    confirm: "Confirm",
    cancel: "Cancel",
    analyzer: "Analyzing your progress & creating new question card",
  },
  es: {
    "uscis.website.instructions.one":
      "Esta respuesta cambia con el tiempo. Visite",
    "uscis.website.instructions.two": "para conocer la respuesta actual.",

    "toast.title.chatDataCopied": "Abriendo ChatGPT...",
    "chatcom.instructions.1":
      "Genera una conferencia útil, amigable y profesional con ejemplos de código en JavaScript en",
    "chatcom.instructions.2":
      "para principiantes sobre la siguiente pregunta/respuesta:",
    "toast.description.chatDataCopied":
      "Pega los datos en el siguiente chat para aprender más.",
    analyzer: "Analizando tu progreso y creando una nueva tarjeta de preguntas",
    "button.pickedup": "Recogido",

    confirm: "Confirmar",
    cancel: "Cancelar",
    "label.new": "¡Nuevo!",
    "ai.error": "Error al formatear la respuesta de la IA",
    "lockout.message":
      "¡Nos hemos equivocado en el problema 5 veces seguidas! Tomémonos un descanso de 15 minutos para calmarnos y replantear nuestra estrategia.",
    "lockout.attempts": "Intentos incorrectos",
    "lockout.outOf": "de",
    "lockout.message": "Has alcanzado el número máximo de intentos.",
    "lockout.suggestion":
      "Por favor, toma un descanso de 15 minutos o estudia el material antes de intentarlo de nuevo.",
    "lockout.timer": "Tiempo restante",
    "lockout.toastTitle": "Bloqueado",
    "lockout.toastDescription":
      "Has sido bloqueado durante 15 minutos debido a múltiples intentos incorrectos.",
    "prompt.invalid_passcode": "¡Código de acceso inválido!",
    "prompt.passcode":
      "Introduce el código de suscripción para habilitar las funciones de inteligencia artificial. La plataforma de suscripción se encuentra en el menú de configuración.",
    thinking: "Pensando...",
    "email.question": "Pregunta",
    "email.donotdelete": "Datos sobre la pregunta, por favor no borrar 🙏🙏🙏",

    "passcode.label": "Ingresa el código de acceso",

    "passcode.instructions": (
      <div>
        ¡Hola! Necesitarás suscribirte al Patreon de Robots Building Education
        para acceder al resto de la experiencia.
        <br />
        <br />
        <div style={{ fontSize: "0.95rem" }}>
          No te preocupes, es súper asequible, está lleno de{" "}
          <b>
            <i>muchísimo</i>
          </b>{" "}
          valor y es amigable con los reembolsos. ¡Siéntete libre de compartir
          el código de acceso con tus amigos o familiares! Me aseguré de que
          valga cada centavo, y obtendrás un gran retorno de inversión por tu
          tiempo, energía y dinero. Suscribirse nos ayuda a mantener las luces
          encendidas y a generar becas a través del aprendizaje.
        </div>
        <br />
        <a
          style={{
            fontSize: "0.95rem",
            textDecoration: "underline",
            color: "#63b3ed",
            fontWeight: "bold",
          }}
          href="https://www.patreon.com/posts/syllabus-getting-86153437?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=postshare_creator&utm_content=join_link"
          target="_blank"
        >
          Suscríbete y obtén el código de acceso
        </a>
      </div>
    ),

    "advice.content": (
      <div>
        Esta plataforma te ayudará a aprender rápida y eficazmente, pero también
        está diseñada para desafiarte. La verdadera educación puede ser
        incómoda, y debes aceptar el fracaso, los errores y el proceso de
        mejora. Esta plataforma no está diseñada para ser como Tiktok o
        Duolingo, donde el material se te entrega de una manera que maximiza la
        interacción, sino que está pensada para que aprendas y crezcas usando el
        poder de la IA. En resumen, hacer las cosas de manera rigurosa a menudo
        es más gratificante y significativo. Si te encuentras con algo confuso o
        difícil, ¡trabájalo! Estarás agradecido de haberlo hecho.
        <br />
        <br />
        Esta plataforma viene con una tutora llamada Rox que te proporcionará
        videoconferencias introductorias, hechas a mano y animadas, para
        equiparte con conocimientos antes o después de practicar las preguntas
        de cada capítulo. Cada conferencia comienza trabajando hacia atrás, para
        que te acostumbres a apreciar el aprendizaje orientado a los desafíos.
      </div>
    ),
    advice: "Mi Consejo",
    "nostrContent.answeredQuestion.1": "Acabo de completar la pregunta",
    "nostrContent.answeredQuestion.2": "con una calificación de",
    "nostrContent.answeredQuestion.3": "en",
    "nostrContent.onboardedProfileAbout":
      "Un estudiante se unió con Robots Building Education",
    "nostrContent.introductionPost":
      "gm nostr! Vengo de TikTok después de crear una cuenta en https://civico.app, donde puedo aprender sobre civismo, ciudadanía y alfabetización legal con IA. ¡Espero conocer a personas de la comunidad cypherpunk! #introductions #LearnWithNostr",
    "createAccount.isCreating": "Creando cuenta... 1/3",
    "createAccount.isCreatingProfile": "Creando perfil... 2/3",
    // "createAccount.isCreatingProfilePicture": "Creando foto de perfil... 3/4",
    "createAccount.isCreatingIntroPost":
      "Creando publicación de introducción en la comunidad #introductions... 3/3",
    chapter: "capítulo",
    tutorial: "Tutorial",
    "tags.grade": "Calificación: ",
    "toast.title.keysCopied": "Claves copiadas.",
    "toast.description.keysCopied":
      "Tus claves se han copiado al portapapeles.",
    "toast.title.addressCopied": "Dirección de Lightning copiada.",
    "toast.description.addressCopied":
      "Tu dirección de Lightning ha sido copiada.",
    "landing.welcome": "Civico",
    "landing.introduction": (
      <div>
        Es hora de superar el desafío.
        <br />
        Usa asistencia inteligente para resolver 100+ preguntas de civismo.
      </div>
    ),
    "landing.button.telemetry": "Crear Cuenta",
    "landing.button.signIn": "Iniciar Sesión",
    "createAccount.instructions":
      "¡Solo necesitamos un nombre de usuario y haremos el resto!",
    "createAccount.input.placeholder": "Ingrese un nombre de usuario",
    "button.back": "Atrás",
    "button.create": "Crear",
    "button.save": "Guardar",
    "button.close": "Cerrar",
    "createAccount.isLoading": "Creando...",
    "createAccount.successMessage": "¡Eso es todo!",
    "createAccount.awareness":
      "Tu cuenta ahora funciona en varias aplicaciones descentralizadas. Usa tu clave para iniciar sesión en aplicaciones como ",
    "createAccount.roxLink": "ROX, el asistente de aprendizaje",
    or: "o",
    "createAccount.primalLink": "Primal, la billetera social",
    "button.copyKey": "Copiar Clave",
    "createAccount.checkbox.disclaimer":
      "Entiendo que mi clave me permite iniciar sesión en diferentes aplicaciones que pueden contener datos importantes y privados como Bitcoin. He guardado mis claves de manera segura.",
    "createAccount.button.launchApp": "Lanzar Aplicación",
    "signIn.instructions": "Ingrese su clave secreta de nostr",
    "signIn.input.placeholder": "Ingrese su clave secreta",
    "button.dismiss": "Descartar",
    "app.progress": "progreso",
    "app.streak": "racha",
    "app.button.answer": "Responder",
    "app.button.nextQuestion": "Siguiente Pregunta",
    "app.button.voiceToText": "Voz a Texto",
    "app.button.voiceToAI": "Solicita Asistencia Inteligente",
    "app.button.learn": "Aprender",
    "app.listening": "Escuchando...",
    "app.input.placeholder": "Escriba su respuesta o use la voz",
    "settings.title": "Configuraciones",
    "settings.selfPace": "Auto ritmo",
    "settings.button.selfPace": "Auto ritmo",
    "settings.button.adaptiveLearning": "Aprendizaje adaptativo",
    "settings.button.bitcoinMode": "Billetera",
    "settings.button.tutor": "Abrir Tutor",
    "settings.button.tutorGPT": "Abrir Tutor (GPT)",
    "settings.button.socialWallet": "Descentralizar",
    "settings.button.patreon": "Suscripción",
    "settings.button.studyGuide": "Guía de Estudio",

    "settings.button.feedback": "Comentarios",
    "settings.button.signOut": "Cerrar sesión",

    "modal.title.selfPace": "Auto ritmo",
    "modal.selfPace.instruction":
      "Elija cuánto tiempo puede transcurrir para aumentar su racha.",
    "modal.selfPace.day": "día",
    "modal.selfPace.hour": "hora",
    "modal.selfPace.minute": "minuto",
    "modal.selfPace.mode": "modo",
    "modal.selfPace.mode.casual": "casual",
    "modal.selfPace.mode.grind": "esfuerzo",
    "modal.selfPace.mode.motivated": "motivado",
    "modal.adaptiveLearning.title": "Aprendizaje adaptativo",
    "modal.adaptiveLearning.recommendButton": "Recomendar qué estudiar después",
    "modal.adaptiveLearning.stepsTaken": "Pasos dados",
    "modal.bitcoinMode.title": "Billetera Bitcoin",
    "modal.bitcoinMode.instructions":
      "Escanea el código QR con Cash App para depositar Bitcoin. Esta es una función de prueba que depositará $0.01 en Bitcoin para mostrar que puedes crear becas utilizando y aprendiendo con la aplicación.",
    "modal.bitcoinMode.copyAddressButton": "Copiar dirección",
    "modal.bitcoinMode.rechargeButton": "Generar Dirección",
    "modal.bitcoinMode.successMessage": "¡Ahora estás usando Bitcoin!",
    "modal.bitcoinMode.cardNameLabel": "Tarjeta de depósito de Bitcoin",
    "modal.bitcoinMode.balanceLabel": "Saldo",
    "modal.bitcoinMode.testCashTapButton": "Probar toque de efectivo",
    "modal.openTutor.title": "Abrir Tutor",
    "modal.openTutor.instructions": "¡No olvides tus claves antes de irte!",
    "modal.openTutor.startButton": "Iniciar aplicación de tutoría",
    "modal.openSocialWallet.title": "Descentralizar",
    "modal.openSocialWallet.instructions":
      "¡No olvides tus claves antes de irte!",
    "modal.openSocialWallet.startButton": "Ir a la Billetera Social",
    "modal.learn.title": "Aprender",
    "modal.learn.instructions":
      "Danos unos segundos para crear notas rápidas de la lección.",
    "modal.feedback.title": "Enviar comentarios",
    "modal.feedback.contactLabel": "Contacto",
    "modal.feedback.contactPlaceholder": "Ingrese su información de contacto",
    "modal.feedback.messageLabel": "Mensaje",
    "modal.feedback.messagePlaceholder": "Ingrese sus comentarios",
    "modal.feedback.submitButton": "Enviar",
    "modal.feedback.cancelButton": "Cancelar",
    "toast.feedbackSubmittedTitle": "Comentarios enviados.",
    "toast.feedbackSubmittedDescription": "¡Gracias por tus comentarios!",
    "toast.feedbackErrorTitle": "Error al enviar comentarios.",
    "toast.feedbackErrorDescription":
      "Ocurrió un error al enviar tus comentarios. Inténtalo de nuevo.",
    "mockTerminal.welcomeMessage":
      "Bienvenido al terminal simulado. Utiliza comandos básicos para navegar por el sistema de archivos.",
    "mockTerminal.userName": "usuario@terminal-simulado",
    "mockTerminal.bashCommand": "bash:",
    "mockTerminal.commandNotFound": "comando no encontrado",
    "mockTerminal.cdCommand": "cd:",
    "mockTerminal.noSuchFileOrDirectory": "no existe tal archivo o directorio",
    "mockTerminal.mkDirCommand": "mkDir:",
    "mockTerminal.cannotCreatDirectory": "no se puede crear el directorio",
    "mockTerminal.fileExists": "El archivo existe",
    "mockTerminal.catCommand": "cat:",
    "mockTerminal.noSuchFile": "No existe tal archivo",
    "mockTerminal.help":
      "Comandos disponibles: help, clear, ls, cat, mkdir, cd, pwd, echo, printenv, whoami",
    "mockTerminal.directory": "Directorio",
    "badBrowser.header": "⚠️ Navegador No Compatible",
    "badBrowser.bodyOne":
      "Esta plataforma utiliza el reconocimiento de voz para que la IA escriba código de forma vocal en dispositivos móviles.",
    "badBrowser.bodyTwo":
      "El navegador no admite estas funciones ya que desarrollan navegadores internos no estándar. En el lado positivo, la alternativa te permite descargar la página como una aplicación en tu teléfono.",
    "badBrowser.bodyThree": "Simplemente",
    "badBrowser.stepOne":
      "Abre esta página en tu navegador con el botón de Más opciones",
    "badBrowser.stepTwo": "Presiona el botón Compartir",
    "badBrowser.stepThree": "Presiona el botón Añadir a la pantalla de inicio",
    "badBrowser.footer":
      "¡Eso es todo! No necesitas descargar la aplicación a través de una tienda de aplicaciones porque estamos utilizando estándares de código abierto para aplicaciones web progresivas.",
    "about.about": (
      <div>
        El propósito de la IA es ahorrarte tiempo y energía. Al mismo tiempo, la
        educación real consiste en desafiarte a ti mismo para que puedas crear
        conocimiento verdadero. En resumen, trabajarás a través de más de 100
        preguntas y te introducirán a la construcción de tus ideas con software,
        aprendiendo ciencias de la computación y creando oportunidades para ti
        mismo con buena tecnología.
        <br />
        <br />
        También quiero enseñarte de manera rápida, efectiva y similar a cómo
        tendrías que adquirir habilidades en el trabajo. Al final del día, un
        emprendedor de software necesita aprender sobre negocios, ingeniería,
        inversión, marketing, ventas, diseño y una serie de otras habilidades
        completas para tener éxito, que es lo que intentamos prepararte aquí.
        <br />
        <br />
        En RO.B.E. se enseñan muchas cosas más allá de la codificación, que van
        desde la psicología de la autoestima hasta el desarrollo de startups
        distribuidas globalmente. Se te anima a imaginar, pensar en grande y
        trabajar duro para encontrar el éxito aquí.
        <br />
        <br />
        El Programa AI App es un servicio creado por Robots Building Education,
        una plataforma fundada en la investigación de tecnología con las
        siguientes tres prioridades:
        <br />
        <br />
        1. Todo estudiante debería tener acceso a muchos buenos maestros.
        <br />
        2. La educación en línea debería ser la mejor educación.
        <br />
        3. Aprender crea becas.
        <br />
        <br />
        Esto se logra con la disciplina de la interacción humano-computadora,
        que investiga cómo hacer que la tecnología sea más útil y significativa.
        Yo personalmente reviso cualquier cosa hecha con IA para añadirle un
        toque humano, de modo que no ofrezca material generado de manera barata,
        sino una entrega genuina de educación de buena calidad.
        <br />
        <br />
        A continuación se encuentran todas las características y beneficios que
        encontrarás en la plataforma, que típicamente son gratuitos. Por ahora,
        solo pido a las personas que opcionalmente se inscriban por $10 para
        acceder a más contenido relacionado con el emprendimiento, finanzas e
        ingeniería, y para crear una red más fuerte.
        <br />
        <br />
        ¿Por qué tan bajo precio por tanto? Me encanta la tecnología educativa y
        quiero trabajar en esta plataforma hasta que sientas que vale la pena
        apoyarla. También creo que las redes sociales me ayudan a llegar a
        muchas personas, por lo que mantener el precio bajo es lo justo.
        Eventualmente me gustaría explorar la enseñanza para que podamos crear
        un canal de acceso a más capital de personas deseosas de invertir en
        negocios tecnológicos diversos.
        <br />
        <br />
        <a
          style={{ textDecoration: "underline" }}
          href="https://patreon.com/notesandotherstuff"
          target="_blank"
        >
          https://patreon.com/notesandotherstuff
        </a>
      </div>
    ),
    "button.about": "Acerca",
    "about.featuresHeader": "Características",
    "about.title": "¿Qué es esto?",
    "about.title.programAiApp": "App: Civico",
    "about.platform.programAiApp": (
      <div>
        Civico es una serie de 100 preguntas diseñadas para ser fácilmente
        integradas en las redes sociales con IA. El objetivo es facilitar el
        acceso a la educación mientras también se hacen posibles aprender
        habilidades como la codificación en dispositivos móviles con
        características útiles de IA.
        <br />
        <br />
      </div>
    ),
    "about.platform.rox": (
      <div>
        Rox es un asistente de enseñanza hecho a mano que entrega conferencias o
        cursos sobre el material que informa las preguntas dentro de la
        experiencia de Civico. Aunque parece robótico, en su mayoría soy yo
        quien realiza la mayor parte de la enseñanza. Una vez fue el producto
        principal, ahora es una característica conectada a Civico.
      </div>
    ),
    "about.platform.roxGPT": (
      <div>
        La versión ChatGPT de las aplicaciones - un asistente de chat armado con
        la información y el contenido encontrado en Robots Building Education.
      </div>
    ),
    "about.platform.Patreon": (
      <div>
        Una plataforma de contenido y comunidad para ayudarte a mantenerte en
        contacto a través de correo electrónico sobre material más profundo en
        tecnología, educación, emprendimiento, inversión y otras habilidades
        importantes.
      </div>
    ),
    "about.title.rox": "App: Rox",
    "about.title.roxGPT": "App: Rox GPT",
    "about.title.Patreon": "App: Patreon",
    "about.title.decentralizedIdentity": "Identidad Descentralizada",
    "about.title.spanishMode": "Modo en Español",
    "about.title.streaks": "Rachas",
    "about.title.quizSeries": "Serie de Cuestionarios",
    "about.title.vocalCoding": "Codificación Vocal",
    "about.title.aiLectureNotes": "Notas de Lección de IA",
    "about.title.aiFeedback": "Retroalimentación de IA",
    "about.title.adaptiveLearning": "Aprendizaje Adaptativo",
    "about.title.bitcoinWallet": "Billetera Bitcoin",
    "about.title.customerService": "Atención al Cliente",
    "about.title.lectures": "Conferencias Hechas a Mano",
    "about.title.conversationQuiz": "Cuestionario de Conversación",
    "about.title.schedulingAssistant": "Asistente de Programación",
    "about.title.shop": "Tienda",
    "about.title.algorithmHelper": "Ayudante de Algoritmos",
    "about.title.emotionalIntelligence": "Inteligencia Emocional",
    "about.title.syllabus": "Sílabo",
    "about.title.guides": "Guías",
    "about.title.insights": "Percepciones",
    "about.title.ofi": "Inteligencia a la Antigüita",
    "about.title.decentralizedTranscripts": "Transcripciones Cruzadas",
    "about.feature.smartCards": (
      <div>
        <DataTags isProgramAI />
        La tarjeta inteligente es una función de tarjeta de memoria que crea
        nuevas preguntas de práctica basadas en tu progreso. Puedes seguir
        practicando problemas con el mismo nivel de dificultad y conocimiento
        antes de continuar con la siguiente pregunta.
      </div>
    ),

    "about.title.smartCards": (
      <div style={{}}>
        <DataTags isNew /> Tarjetas Inteligentes
      </div>
    ),
    "about.feature.decentralizedTranscripts": (
      <div>
        <DataTags isRox isProgramAI />
        El progreso en cualquier aplicación te otorgará insignias de
        transcripción que podrás llevar de una plataforma a otra. Esto hace que
        la educación en línea sea más impresionante y representativa del
        esfuerzo realizado.
      </div>
    ),
    "about.feature.decentralizedIdentity": (
      <div>
        <DataTags isRox isProgramAI />
        Robots Building Education aprovecha las identidades descentralizadas
        para permitir cuentas multiplataforma y la propiedad de datos. Esto nos
        permite integrar nuestras aplicaciones directamente en las redes
        sociales. Todo lo que necesitamos es un simple nombre de usuario y
        crearemos claves que te permitirán acceder al puente hacia el mundo
        descentralizado.
      </div>
    ),
    "about.feature.spanishMode": (
      <div>
        <DataTags isProgramAI />
        Civico está disponible en español. ¡Bienvenido a aprender en español
        para practicar también tus habilidades de lenguaje humano!
      </div>
    ),
    "about.feature.streaks": (
      <div>
        <DataTags isProgramAI />
        Una función de auto ritmo para ayudarte a mantener la disciplina.
        ¡Configura temporizadores de 30 minutos a 3 días!
      </div>
    ),
    "about.feature.quizSeries": (
      <div>
        <DataTags isProgramAI />
        100 preguntas informadas por el asistente de enseñanza Rox, emparejadas
        con una serie de características para presentarte nuevos conceptos y
        desafíos.
      </div>
    ),
    "about.feature.vocalCoding": (
      <div>
        <DataTags isProgramAI />
        La capacidad de grabar tu respuesta de manera vocal para que la IA
        transforme tu solicitud en código en dispositivos móviles.
      </div>
    ),
    "about.feature.aiLectureNotes": (
      <div>
        <DataTags isProgramAI />
        Cada pregunta viene con la capacidad de generar notas de lección para
        que puedas aprender más sobre la pregunta mientras te introduces en un
        nuevo desafío.
      </div>
    ),
    "about.feature.aiFeedback": (
      <div>
        <DataTags isProgramAI />
        Cada pregunta es calificada por IA antes de permitirte continuar a la
        siguiente pregunta.
      </div>
    ),
    "about.feature.adaptiveLearning": (
      <div>
        <DataTags isProgramAI isRox />
        Una función que hace un seguimiento de tu progreso y sugiere el próximo
        mejor desafío para aprender.
      </div>
    ),
    "about.feature.bitcoinWallet": (
      <div>
        <DataTags isProgramAI isRox />
        Una función experimental que me permite monetizar fácilmente las
        interacciones con las aplicaciones en lugar de agruparlas detrás de
        suscripciones. Ahora mismo solo puedes depositar $0.02 para que cada
        interacción cueste alrededor de $0.0008 USD por interacción. ¡Todo lo
        que necesitas es una aplicación de efectivo y podrás depositar
        fácilmente para su uso!
      </div>
    ),
    "about.feature.customerService": (
      <div>
        <DataTags isPatreon />
        Con suficiente apoyo, puedo ofrecer un servicio más personal con
        llamadas remotas, tutoría y otros esfuerzos directos al estudiante.
        Actualmente, esta función está desactivada hasta nuevo aviso y se maneja
        con discreción.
      </div>
    ),
    "about.feature.lectures": (
      <div>
        <DataTags isRox />
        Una colección de conferencias que considero de alto valor, creadas con
        animación de alta calidad y esfuerzo. La experiencia es una introducción
        a conceptos avanzados realizados de una manera que inspira confianza en
        una jornada de aprendizaje.
      </div>
    ),
    "about.feature.conversationQuiz": (
      <div>
        <DataTags isRox isProgramAI />
        Una función de cuestionario donde tu conversación con la IA puede ser
        calificada.
      </div>
    ),
    "about.feature.schedulingAssistant": (
      <div>
        <DataTags isRox isPatreon />
        Una función para ayudarte a programar tu aprendizaje a nivel micro y
        macro.
      </div>
    ),
    "about.feature.shop": (
      <div>
        <DataTags isRox isPatreon /> La capacidad de comprar libros para
        profundizar tu conocimiento en diferentes dominios.
      </div>
    ),
    "about.feature.algorithmHelper": (
      <div>
        <DataTags isRox />
        Una función que te ayuda a entrenar tu comprensión de algoritmos con
        patrones de toma de decisiones, asistencia de código y
        retroalimentación.
      </div>
    ),
    "about.feature.emotionalIntelligence": (
      <div>
        <DataTags isRox isPatreon />
        Una función de seguimiento emocional centrada en la autoestima.
      </div>
    ),
    "about.feature.syllabus": (
      <div>
        <DataTags isPatreon />
        Un kit para empezar con desafíos a corto y largo plazo para ganancias de
        conocimiento.
      </div>
    ),
    "about.feature.guides": (
      <div>
        <DataTags isPatreon />
        Ensayos y software de alta intención sobre inversiones y desarrollo de
        software.
      </div>
    ),
    "about.feature.insights": (
      <div>
        <DataTags isPatreon />
        Acceso entre bastidores al desarrollo de Robots Building Education.
      </div>
    ),
    "about.feature.ofi": (
      <div>
        <DataTags isPatreon />
        Contenido pagado (pero económico) para aprendizaje post-plataforma.
        Desarrollado con la intención de intentar producir un retorno
        significativo de la inversión para apoyar la plataforma.
      </div>
    ),
    "button.addToConversation": "Agregar a la conversación",
    "button.subjectsCovered": "Temas cubiertos",
    "settings.button.yourTutor": "Tu Tutor",
    "settings.button.civilRightsAI": "IA de Derechos Civiles",
    "settings.button.yourProfile": "Tu Perfil",
    "settings.button.nostrApps": "Colección de Apps",
    "link.connectWithMe": "¡Conéctate conmigo!",
    "Civico Tutorial": "Tutorial de Civico",
    "Basics of Coding": "Fundamentos de la Programación",
    "Object-Oriented Programming": "Programación Orientada a Objetos",
    "Frontend Development": "Desarrollo Frontend",
    "Backend Engineering Fundamentals": "Fundamentos de Ingeniería Backend",
    "Creating Apps & Experiences": "Creación de Aplicaciones y Experiencias",
    "Computer Science": "Ciencias de la Computación",
    "Introduction to Engineering": "Introducción a la Ingeniería",
    "Programming Fundamentals": "Fundamentos de la Programación",
    "Frontend Software Engineering": "Ingeniería de Software Frontend",
    "Backend Software Engineering": "Ingeniería de Software Backend",
    "Data Structures & Algorithms": "Estructuras de Datos y Algoritmos",
    "Full-stack Software Engineering": "Ingeniería de Software Full-stack",
    "Psychology of Self-esteem": "Psicología de la Autoestima",
    "Philosophy of Critical Theory & Technology":
      "Filosofía de la Teoría Crítica y Tecnología",
    "Human-Computer Interaction": "Interacción Humano-Computadora",
    "Business Writing": "Redacción Comercial",
    "Introduction to Finance": "Introducción a las Finanzas",
    "modal.title.decentralizedTranscript": "Transcripción Descentralizada",
    "modal.decentralizedTranscript.youEarned": "Has ganado",
    "modal.decentralizedTranscript.awareness":
      "Estos premios se pueden transferir a otras plataformas como",
    "modal.decentralizedTranscript.awardsEarned": "Premios Ganados",
    loading: "Cargando...",
    "settings.button.transcript": "Transcripción",
    "modal.transcript.instructions": "",
    yourID: "Tu ID público: ",
    noTranscriptFound:
      "No se encontraron premios de transcripciones anteriores.",
    congratulations: "¡Felicidades!",
    "congrats.message":
      "Has completado el cuestionario. Deberías estar orgulloso porque la mayoría de las personas no llegan tan lejos. Eres genuinamente excepcional. ¡Bien hecho!",
    "congrats.connect": "Conéctate con todos los que han terminado",
  },
};
