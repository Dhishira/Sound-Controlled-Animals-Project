function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio : true});
    sounds = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/4UHlUq1_9/model.json",modelready);
}

function modelready()
{
    sounds.classify(gotresult);
}

dog = "0" ;
cat = "0" ;
lion = "0" ;
background_noise = "0" ;

function gotresult(error,results)
{
    if(error)
    {
        console.error("error") ;
    }
    else if(results)
    {
       console.log(results);
       random_numnber_r = Math.floor(Math.random() * 255)+1 ;
       random_numnber_g = Math.floor(Math.random() * 255)+1 ;
       random_numnber_b = Math.floor(Math.random() * 255)+1 ;

       document.getElementById("dectected_times").innerHTML = "Detected Dog - "+dog+" Detected Cat - "+cat+" Detected Lion - "+lion ;
       document.getElementById("detected_voice").innerHTML = "detected voice is of - "+results[0].label;
       document.getElementById("detected_times").style.color = "rgb("+random_numnber_r+","+random_numnber_g+","+random_numnber_b+")";
       document.getElementById("detected_voice").style.color = "rgb("+random_numnber_r+","+random_numnber_g+","+random_numnber_b+")";

       img = document.getElementById("animal") ;

       if( results[0].label == "Cat (meow)")
       {
         cat = cat + 1 ;
         img.src ="cat.jpg" ;
       }
       else if( results[0].label == "Dog(barking)")
       {
         dog = dog + 1 ;
         img.src ="dog.jpg" ;
       }
       else if( results[0].label == "Class 4")
       {
         lion = lion + 1 ;
         img.src ="lion.jpg" ;
         document.getElementById("detected_voice").innerHTML = "detected voice is of - Lion";
       }
       else
       {
         background_noise = background_noise + 1 ;
         img.src ="ear.png"
       }
    }
}