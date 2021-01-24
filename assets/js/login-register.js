$(document).ready(function() {
    //  openLoginModal();
    $("#header").load("header.html");
    $("#footer").load("footer.html");
    $(window).scroll(function() {
        if ($(window).scrollTop() > 56) {
            $("header").addClass("headershawdow");
            $("header").removeClass("mobilebgcolr");
        } else {
            $("header").removeClass("headershawdow");
        }
    });

});

function showRegisterForm() {
    $('.loginBox').fadeOut('fast', function() {
        $('.registerBox').fadeIn('fast');
        $('.login-footer').fadeOut('fast', function() {
            $('.register-footer').fadeIn('fast');
        });
        $('.modal-title').html('Register with');
    });
    $('.error').removeClass('alert alert-danger').html('');

}

function showLoginForm() {
    $('#loginModal .registerBox').fadeOut('fast', function() {
        $('.loginBox').fadeIn('fast');
        $('.register-footer').fadeOut('fast', function() {
            $('.login-footer').fadeIn('fast');
        });

        $('.modal-title').html('Login');
    });
    $('.error').removeClass('alert alert-danger').html('');
}

function openLoginModal() {
    showLoginForm();
    setTimeout(function() {
        $('#loginModal').modal('show');
    }, 230);

}

function openRegisterModal() {
    showRegisterForm();
    setTimeout(function() {
        $('#loginModal').modal('show');
    }, 230);

}


function editable() {
    // alert("dev");
    var h1 = document.getElementsByTagName("H1");
    var att = document.createAttribute("contenteditable");
    att.value = "true";
    h1.setAttributeNode(att);
  }
  
  function noteditable() {
    var h1 = document.getElementsByTagName("H1")[0];
    var att = document.createAttribute("contenteditable");
    att.value = "flase";
    h1.setAttributeNode(att);
  }
//   var theContent = $('#content2');
//   $('#edit').on('click', function(){
//     var att = document.createAttribute("contenteditable");
//     att.value = "true";
//     }); 
//   $('#save').on('click', function(){
//     var editedContent   = theContent.html();
//     localStorage.newContent = editedContent;
//   });
  
  



