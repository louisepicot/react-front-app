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

dPath.fillColor = '#FF236D';
dPath2.fillColor = '#FF236D';
dPath.strokeColor = '#FF236D';
dPath2.strokeColor = '#FF236D';
 rPath.fillColor = '#FFFFFF';
sPath.fillColor = '#FFFFFF';


var destination = Point.random() * view.size;

var myPath = new Path();
myPath.add(new Point(0, 0));
myPath.add(new Point(100, 50));

function onFrame(event) {
    var vector = destination - dPath.position;
    dPath.position += vector / 20;
    dPath2.position += vector / 20;
    rPath.rotate(1);
    dPath.rotate(1);
    dPath2.rotate(1);
    myPath.strokeWidth = 5;
    myPath.strokeColor = '#FF236D';
    myPath.add(new Point(dPath.position, vector / 20));
    // lPath.fillColor.hue += 1
    if (vector.length < 5) {
        destination = Point.random() * view.size;
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