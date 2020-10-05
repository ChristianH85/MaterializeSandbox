$(document).ready(function(){
    // M.AutoInit();
    $('.slider').slider({height:400,});
    $('.materialboxed').materialbox();
    $('.tap-target').tapTarget();
    $('.sidenav').sidenav();
    console.log('ready')

    const fakelist=[
        {img:"./images/burningcake.jpg",
        title:"The cake is a lie",
        caption: "True story: I helped build this cake, attended a wedding there, and burnt it down"},
        {img:"./images/pope.jpg",
        title:"Il Pope",
        caption: "I should have sneezed loudly to get blessed"},
        {img:"./images/cooks.jpg",
        title:"Cooks not cooking",
        caption: "Proof of exploits from another life"},
    ]
    fakelist.forEach(data=>{console.log(data)
        $("#cards").append(`
        <div class="col s12 m3">
        <div class="card">
          <div class="card-image">
            <img src=${data.img}></img>
            <span class="card-title">${data.title}</span>
          </div>
          <div class="card-content">
            <p>${data.caption}</p>
          </div>
        </div>
        </div>`
        )
    })
  });