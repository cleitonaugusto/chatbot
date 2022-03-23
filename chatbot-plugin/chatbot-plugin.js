const portalBody = document.querySelector('body')
const portalDivIframe = document.createElement("div")
const portalIframe = document.createElement("iframe")
const chatBotMessage = document.createElement("div")
const chatbotCall = document.createElement("div")
const chatbotState = {
    isShow: false,
    iframeSrc: "https://appserver1.trt14.jus.br/hml-chatbot/",
    personPic: "https://appserver1.trt14.jus.br/hml-chatbot/img/raira.d2ceab22.jpg",
    messages: [
        {id:1, message: 'Olá, sou a Raíra, assistente virtual do TRT14. Em que posso ajudar?'},
        {id:2, message: 'Vou continuar por aqui, caso precise!'}
    ],
    countClick: 0
}

chatbot()

async function chatbot(){
    portalDivIframe.classList.add('chatbot-div-iframe')
    portalDivIframe.classList.add('initial-position')
    portalIframe.classList.add('chatbot-iframe')
    portalIframe.src = chatbotState.iframeSrc        
    
    chatBotMessage.classList.add('chatbot-msg')
    chatBotMessage.classList.add('initial-position')
    chatBotMessage.innerHTML = chatbotState.messages[0].message
    
    chatbotCall.classList.add('chatbot-call')
    chatbotCall.classList.add('initial-position')
    chatbotCall.innerHTML = `<img src="${chatbotState.personPic}" class="person-pic">`
    chatbotCall.addEventListener('click', async () => {
        if(!chatbotState.isShow){
            portalDivIframe.append(portalIframe)
        }
        chatbotState.isShow = !chatbotState.isShow
        const classeAdd = chatbotState.isShow ? 'presentation-position' : 'initial-position'
        const classeRem = chatbotState.isShow ? 'initial-position' : 'presentation-position'
        portalDivIframe.classList.remove(classeRem)
        portalDivIframe.classList.add(classeAdd)
        chatBotMessage.classList.remove('presentation-position')
        setTimeout(() => {
            if(!chatbotState.isShow){
                chatBotMessage.innerHTML = chatbotState.messages[1].message
                chatBotMessage.classList.add('presentation-position')
                setTimeout(() => {
                    chatBotMessage.classList.remove('presentation-position')                
                }, 5000 + 600);    
            }
        }, 600)
        chatbotState.countClick++
    })
    
    portalBody.append(chatbotCall)
    portalBody.append(chatBotMessage)
    portalBody.append(portalDivIframe)
    
    setTimeout(() => {
        chatBotMessage.classList.add('presentation-position')
    }, 1000)
}
