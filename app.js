const username = () =>{
    let get_username = document.getElementById("username").value;
    console.log(get_username)
    document.getElementById("user-id").innerHTML = 
    `
    <p style="font-size: large;"> ${get_username+"'s gallery"}</p>
    `;
}

const profile = () =>{
    document.getElementById("profile").style.background = "url("+document.getElementById("profile-img").value+")";
}
