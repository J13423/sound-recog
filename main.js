//https://teachablemachine.withgoogle.com/models/TnDYClnzC/
Webcam.set({
    width:350,
    height:350,
    image_format: 'png',
    png_quality: 90

})

camera = document.querySelector('#camera')
Webcam.attach('#camera')

function snapShot() {
    Webcam.snap((URI) => {
        document.querySelector('#result').innerHTML = '<img id="snap" src="' + URI + '"/>'
    })
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/TnDYClnzC/model.json', modelLoaded)

function modelLoaded() {
    console.log('Loaded!');
}

function check() {
    img = document.querySelector('#snap');
    classifier.classify(img, gotResult);
}

function gotResult(error, result) {
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
    }
     
    document.querySelector('#object').innerHTML = result[0].label;
    document.querySelector('#accuracy').innerHTML = result[0].confidence.toFix(2)
}
