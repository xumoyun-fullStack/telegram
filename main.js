let DATA = {
    users:[
        {
            id: 1,
            first_name:"Asadbek ",
            last_name: "Zoirov",
            user_name: "asadbekzoirov",
            profil_photo:"https://www.herzing.edu/sites/default/files/styles/fp_960_640/public/2020-09/it_computer_programming.jpg.webp?itok=8aEwtSxk",
            bio: "",
            groups_common: 1,
            shared_links: 2,
            shared_photos: 2,
            shared_voice: 0,
            activity: "online",
            selected:true,
            messages:[
                {
                    id_msg: 1,
                    is_from_me : false,
                    text: " Assalomu aleykum",
                    time: new Date(),
                },
                {
                    id_msg: 2,
                    is_from_me : true,
                    text: " Assalomu aleykum",
                    time: new Date(),
                },
            ] ,

        },
        {
            id: 2,
            first_name:"Hoshimjon ",
            last_name: "",
            user_name: "",
            profil_photo:"https://cdn3.vectorstock.com/i/1000x1000/20/92/lettering-bad-boy-vector-25612092.jpg",
            bio: "",
            groups_common: 5,
            shared_links: 12,
            shared_photos: 6,
            shared_voice: 4,
            activity: "last seen recently",
            selected:false,
            messages:[
                {
                    id_msg: 1,
                    is_from_me : false,
                    text: " Assalomu aleykum,yaxshimisan",
                    time: new Date(),
                },
                {
                    id_msg: 2,
                    is_from_me : true,
                    text: " vaaleykum assalom",
                    time: new Date(),
                },
            ] ,
        },
        {
            id: 3,
            first_name:"Diyorbek ",
            last_name: "",
            user_name: "",
            profil_photo:"",
            bio: "",
            groups_common: 5,
            shared_links: 12,
            shared_photos: 6,
            shared_voice: 4,
            activity: "last seen recently",
            selected:false,
            messages:[
                {
                    id_msg: 1,
                    is_from_me : false,
                    text: "Salom qalaysan",
                    time: new Date(),
                },
                {
                    id_msg: 2,
                    is_from_me : true,
                    text: " zo`r rahmat",
                    time: new Date(),
                },
            ] ,
        },
        {
            id: 4,
            first_name:"Abror ",
            last_name: "",
            user_name: "",
            profil_photo:"https://ichef.bbci.co.uk/news/976/cpsprodpb/C448/production/_117684205_lotus.jpg",
            bio: "",
            groups_common: 5,
            shared_links: 12,
            shared_photos: 6,
            shared_voice: 4,
            activity: "last seen 44 minutes ago",
            selected:false,
            messages:[
                {
                    id_msg: 1,
                    is_from_me : false,
                    text: "Salom",
                    time: new Date(),
                },
                {
                    id_msg: 2,
                    is_from_me : true,
                    text: " Assalom",
                    time: new Date(),
                },
            ] ,
        },
        {
            id: 5,
            first_name:"Ahror ",
            last_name: "",
            user_name: "",
            profil_photo:"https://designincredible.com/wp-content/uploads/2021/02/dubai-tower-arab-khalifa-162031.jpeg",
            bio: "",
            groups_common: 5,
            shared_links: 12,
            shared_photos: 6,
            shared_voice: 4,
            activity: "online",
            selected:false,
            messages:[
                {
                    id_msg: 1,
                    is_from_me : false,
                    text: "Salom",
                    time: new Date(),
                },
                {
                    id_msg: 2,
                    is_from_me : true,
                    text: " qalaysan",
                    time: new Date(),
                },
            ] ,
        },
        {
            id: 6,
            first_name:"jahongir ",
            last_name: "",
            user_name: "",
            profil_photo:"https://cdn1.vectorstock.com/i/1000x1000/94/10/lovers-vector-4379410.jpg",
            bio: "",
            groups_common: 5,
            shared_links: 12,
            shared_photos: 6,
            shared_voice: 4,
            activity: "last seen 1 minute ago",
            selected:false,
            messages:[
                {
                    id_msg: 1,
                    is_from_me : false,
                    text: "na gap",
                    time: new Date(),
                },
                {
                    id_msg: 2,
                    is_from_me : true,
                    text: " tinch",
                    time: new Date(),
                },
            ] ,
        },
        {
            id: 7,
            first_name:"Atabek",
            last_name: "",
            user_name: "",
            profil_photo:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202012/chris-ried-ieic5Tq8YMk-unsplas_1200x768.jpeg?bEhcYQAShJnLf0Mtu4JYq8YzICfhz2rB&size=770:433",
            bio: "",
            groups_common: 5,
            shared_links: 12,
            shared_photos: 6,
            shared_voice: 4,
            activity: "last seen 1 hour ago",
            selected:false,
            messages:[
                {
                    id_msg: 1,
                    is_from_me : false,
                    text: "ahvollar",
                    time: new Date(),
                },
                {
                    id_msg: 2,
                    is_from_me : true,
                    text: " zo`r",
                    time: new Date(),
                },
            ] ,
        },
        {
            id: 8,
            first_name:"Saidkamol ",
            last_name: "",
            user_name: "",
            profil_photo:"https://www.advantour.com/img/uzbekistan/khiva/djuma-mosque.jpg",
            bio: "",
            groups_common: 5,
            shared_links: 12,
            shared_photos: 6,
            shared_voice: 4,
            activity: "last seen recently",
            selected:false,
            messages:[
                {
                    id_msg: 1,
                    is_from_me : false,
                    text: "whats up",
                    time: new Date(),
                },
                {
                    id_msg: 2,
                    is_from_me : true,
                    text: " fine!",
                    time: new Date(),
                },
            ] ,
        },
    ]
}



let send = document.querySelectorAll(".visible")

let btn = document.querySelectorAll("button")
let input = document.querySelector("#msg_input")
let chats = document.querySelector(".container")

let info = document.querySelector(".chat_info")

// set values of users

function setUser(user,i){

    let data = DATA.users[i]
    let j = data.messages.length - 1
    let name = data.first_name + data.last_name

    let text = data.messages[j].text.length > 30 ? data.messages[j].text.slice(0,30) + "...." : data.messages[j].text 

    let time = (data.messages[j].time.getHours() < 10 ? "0"+data.messages[j].time.getHours():data.messages[j].time.getHours()) + ":" + (data.messages[j].time.getMinutes() < 10 ? "0" + data.messages[j].time.getMinutes() : data.messages[j].time.getMinutes() )
  
    if(data.profil_photo){
        user.childNodes[1].setAttribute("src",`${data.profil_photo}`)
    }else{
        user.childNodes[1].setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmJvXw8ZBpDZpX5i8yPmy9SgP1SK5vXQKVUw&usqp=CAU")
    }
  
    user.childNodes[3].innerHTML = `<span class="user_name">${name}<span class="chat_time">${time}
    </span>
    </span>
    <span class="last_message">${text}</span>` 
   
}



// select chat and sending messages
let char = document.querySelectorAll(".chat")

char.forEach(function(c, index){
    let data = DATA.users[index]
    setUser(c,index)
  
    char[index].addEventListener("click",function(){
        info.childNodes[1].childNodes[1].textContent = data.first_name
        info.childNodes[1].childNodes[3].textContent = data.activity
        setChatInfo(data)
        
        if(data.selected){
            
            send.forEach(function(el){
                el.setAttribute("style", "visibility: visible")
            })
            DATA.users.forEach(function(user, index_u){
                if(index_u === index){
                    user.selected = false
                  
                }else{
                    user.selected = true
                   
                }
            })
        }else{
   
            send.forEach(function(el){
                el.setAttribute("style", "visibility: hidden")
            })
            data.selected = true
        }
      
      btn.forEach(function(element, i){
          if(i === index){
            element.setAttribute("style", "display: block")
          }else{
            element.setAttribute("style", "display: none")
          }
      })
      render(index)
               
      btn[index].addEventListener("click", function(){
        
     
        let txt = input.value 
        if(txt){

            let msg = {
                id: data.messages.length + 1,
                is_from_me: true,
                text: txt,
                time: new Date(),
            }
    
            data.messages.push(msg)
            render(index)
           input.value = ""
           setUser(c,index)
        }

    })
              
                      
       
    })
})


function render(i){
    chats.innerHTML =""
        
    DATA.users[i].messages.forEach(function(txt){
       chats.innerHTML += `<li class=${txt.is_from_me ? "from_me": "to_me"}>${txt.text}</li>`
    })
}



//show chat info

let details = document.querySelector(".chat_info")
let chat_infos_bg = document.querySelector(".chat_infos_bg")
let chat_infos = document.querySelector(".chat_infos")

details.addEventListener("click",function(){
  
    chat_infos_bg.classList.add('active_bg')
    chat_infos.classList.add('active_chat')
  
})

chat_infos_bg.addEventListener("click",function(){
    chat_infos_bg.classList.remove("active_bg")
    chat_infos.classList.remove("active_chat")
   
})



function setChatInfo(data){
    document.querySelector(".chat_info_img").setAttribute("src", `${data.profil_photo}`)
    document.querySelector(".profil_text").childNodes[1].innerHTML = `${data.first_name}`  
    document.querySelector(".profil_text").childNodes[3].innerHTML = `${data.activity}`

    document.querySelector(".shared_photo").childNodes[5].innerHTML = `${data.shared_photos}`
    document.querySelector(".shared_links").childNodes[5].innerHTML = `${data.shared_links}`
    document.querySelector(".shared_voices").childNodes[5].innerHTML = `${data.shared_voice}`

}

let btn_2 = document.querySelector(".on_off")
let btn_3 = document.querySelector(".on_off_2")

btn_2.onclick = function(){
    btn_2.classList.toggle('active_btn')
}

btn_3.onclick = function(){
    btn_3.classList.toggle('active_btn_2')
}

document.querySelector(".fa-bars").addEventListener("click", function(){
    document.querySelector(".humburger").classList.add("active")
    document.querySelector(".humb_bg").classList.add("active_hum")

})

document.querySelector(".humb_bg").addEventListener("click", function(){
    document.querySelector(".humb_bg").classList.remove("active_hum")
    document.querySelector(".humburger").classList.remove("active")
    console.log("hum")
})
