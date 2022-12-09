


function toDarkMode(){

    const modeCookieValue = document.cookie
    .split('; ')
    .find((row) => row.startsWith('current-mode='))
    ?.split('=')[1];
  
    if(modeCookieValue == "dark")
    {

        document.cookie = "current-mode = light";

        $(".bg-dark").each(function(){
            $(this).removeClass("bg-dark");
            $(this).addClass("bg-light");
        })
    
        $(".text-light").each(function(){
            $(this).removeClass("text-light");
            $(this).addClass("text-dark");
        })
        
        $(".text-bg-dark").each(function(){
            $(this).removeClass("text-bg-dark");
            $(this).addClass("text-bg-light");
        })
    
        $(".btn-dark").each(function(){
            $(this).removeClass("btn-dark");
            $(this).addClass("btn-light");
        })
        
        $(".icon1").each(function(){
            $(this).css("fill", "#000000")
        })

        $("#bg").css("background", "repeating-linear-gradient(90deg, #CECECE, #CECECE 50px, #fff 50px, #fff 55px)")
        $("body").removeClass("inDark")
    }
    else{

        document.cookie = "current-mode = dark";

        $(".bg-light").each(function(){
            $(this).removeClass("bg-light");
            $(this).addClass("bg-dark");
        })
    
        $(".text-dark").each(function(){
            $(this).removeClass("text-dark");
            $(this).addClass("text-light");
        })
        
        $(".text-bg-light").each(function(){
            $(this).removeClass("text-bg-light");
            $(this).addClass("text-bg-dark");
        })
    
        $(".btn-light").each(function(){
            $(this).removeClass("btn-light");
            $(this).addClass("btn-dark");
        })
        $(".icon1").each(function(){
            $(this).css("fill", "#fff")
        })
        $("body").addClass("inDark")
        $("#bg").css("background", "repeating-linear-gradient(45deg, #07090A, #07090A 20px, #1a1b1c 20px, #1a1b1c 55px)")
    }

    
}


$(document).ready(function(){
    $("#flexSwitchCheckChecked").prop("checked", true)
    $("#flexSwitchCheckChecked").addClass("bg-dark")
    document.cookie = "current-mode = dark";
})


$("#flexSwitchCheckChecked").change(function(){
    console.log("done");
    toDarkMode();

});