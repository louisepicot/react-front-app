project.importSVG(document.getElementById('svg'));
document.getElementById('svg').parentNode.removeChild(document.getElementById('svg'));

console.log(project.activeLayer.children.svg.children)

// 

var dPath = project.activeLayer.children.svg.children[13].children[1]
var dPath2 = project.activeLayer.children.svg.children[13].children[0]
var rPath = project.activeLayer.children.svg.children[9]
var sPath = project.activeLayer.children.svg.children[11]

// var dPath = project.activeLayer.children.svg.children[0]
// var dPath2 = project.activeLayer.children.svg.children[2]
// var rPath = project.activeLayer.children.svg.children[3]
// var sPath = project.activeLayer.children.svg.children[15]
// var dPath = project.activeLayer.children.svg.children[6]
// var dPath2 = project.activeLayer.children.svg.children[7]
// var rPath = project.activeLayer.children.svg.children[8]
// var sPath = project.activeLayer.children.svg.children[11]
// var rPath = project.activeLayer.children.svg.children[12]

// dPath.fillColor = '#86E300';
// dPath2.fillColor = '#86E300';

// dPath.strokeColor = '#86E300';
// dPath2.strokeColor = '#86E300';
// rPath.fillColor = '#00D8E3';

// sPath.fillColor = '#86E300';


var destination = Point.random() * view.size;
var destination2 = Point.random() * view.size;

var myPath = new Path();
myPath.add(new Point(0, 0));
myPath.add(new Point(100, 50));
var myPath2 = new Path();
myPath2.add(new Point(0, 0));
myPath2.add(new Point(100, 50));

function onFrame(event) {
  
    var vector = destination - dPath.position;
    var vector2 = destination2 - rPath.position;
    dPath.position += vector / 20;
    dPath2.position += vector / 20;
    rPath.position += vector2 / 60;
    sPath.rotate(1);
    dPath.rotate(1);
    dPath2.rotate(1);
    myPath.strokeWidth = 1;
    myPath.strokeColor = '#FFFFFF';
    myPath.add(new Point(dPath.position, vector / 20));

    myPath2.strokeWidth = 0.05;
    // myPath2.strokeColor = '#00D8E3';
    myPath2.add(new Point(rPath.position, vector / 40));
    // lPath.fillColor.hue += 1
    if (vector.length < 5) {
        destination = Point.random() * view.size;
        destination2 = Point.random() * view.size;
    }

}
// var file = document.getElementById('file');
// file.addEventListener('change', function (event) {
//     var files = event.target.files;
//     for (var i = 0; i < files.length; i++) {
//         var file = files[i];
//         if (file.type.match('svg')) {
//             // project.clear();
//             project.importSVG(file, function (item) {
//                 console.log(item);
//             });
//         }
//     }
// });