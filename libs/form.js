

    function forma() {

        let w1 = document.documentElement.clientWidth // ширина окна
        let h1 = document.documentElement.clientHeight // выстота окна

        // alert("hello"+w1+" "+h1)

        console.log(w1+" "+h1);

        // ndiv = document.createElement('div')
        // ndiv.setAttribute('id', "mydiv");
        // ndiv.setAttribute('onclick', "mydiv0.removeChild(ndiv)");
     
        mydiv0.style.cssText= "width: "+w1+"px; \
                             height: "+h1+"px;";
                             
         myform0.style.display = "block";                   
        
        // mydiv0.appendChild(ndiv)




//         function divRes() {
//             mydiv0.style.cssText= "width: "+w1+"px; \
//             height: "+h1+"px;";

//         }



// addEventListener('scroll', divRes);



    }

    function forma1() {

        let w1 = document.documentElement.clientWidth // ширина окна
        let h1 = document.documentElement.clientHeight // выстота окна

        // alert("hello"+w+" "+h)

        // ndiv = document.createElement('div')
        // ndiv.setAttribute('id', "mydiv");
        // ndiv.setAttribute('onclick', "mydiv0.removeChild(ndiv)");
     
        mydiv1.style.cssText= "width: "+w1+"px; \
                             height: "+h1+"px;";
                             
         myform1.style.display = "block";                   
        
        // mydiv0.appendChild(ndiv)


    }
