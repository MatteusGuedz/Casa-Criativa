function onOff(){
    document
    .querySelector("#modal")
    .classList
    .toggle("hide") 

    document
    .querySelector("body")
    .classList 
    .toggle("hideScroll")

    document 
    .querySelector("#modal")
    .classList
    .toggle("addScroll")

}



function checkFields(event){
    const valuesToCheck = [
        "title",
        "category",
        "image",
        "description",
        "link",

    ]


    
    const isEmpty = valuesToCheck.find((value)=> {
      const  checkIfsString =  typeof event.target[value].value === "string"
      const checkIfsEmpty = !event.target[value].value.trim()

    if (checkIfsString &&  checkIfsEmpty){
            return true
    }
    })

    if(isEmpty){
        event.preventDefault()

        alert("Por favor, preencha todos os campos")
    }
}
