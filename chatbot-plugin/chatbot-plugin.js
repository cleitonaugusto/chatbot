let _chatbotState = {
    isShow: false,
    iframeSrc: "https://appserver1.trt14.jus.br/hml-chatbot/",
    personPic: "https://appserver1.trt14.jus.br/hml-chatbot/img/raira.d2ceab22.jpg"
}

const portalBody = document.querySelector('body')
const portalDivIframe = document.createElement("div")
portalDivIframe.classList.add('chatbot-div-iframe')
portalDivIframe.classList.add('initial-position')
const portalIframe = document.createElement("iframe")
portalIframe.classList.add('chatbot-iframe')
portalIframe.src = _chatbotState.iframeSrc        
portalDivIframe.append(portalIframe)

const chatbotCall = document.createElement("div")
chatbotCall.classList.add('chatbot-call')
chatbotCall.classList.add('initial-position')
chatbotCall.innerHTML = `<img src="${_chatbotState.personPic}" class="person-pic">`
chatbotCall.addEventListener('click', () => {
    _chatbotState.isShow = !_chatbotState.isShow
    const classeAdd = _chatbotState.isShow ? 'presentation-position' : 'initial-position'
    const classeRem = _chatbotState.isShow ? 'initial-position' : 'presentation-position'
    portalDivIframe.classList.remove(classeRem)
    portalDivIframe.classList.add(classeAdd)
    chatbotCall.classList.remove(classeRem)
    chatbotCall.classList.add(classeAdd)
    _chatbotState.countClick++
})

portalBody.append(chatbotCall)
portalBody.append(portalDivIframe)