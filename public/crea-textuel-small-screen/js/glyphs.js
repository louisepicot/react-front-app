// 
opentype.load('assets/fonts/Wondertype-Regular.otf  ', function (err, font) {
    if (err) {
        alert('Could not load font: ' + err);
    } else {
        //define x y coordinates to position your text in the screen
        //define fontsize
        let y = 90;
        let x = 30;
        const fontSize = 40;

        //difine all the variable for the flame path
        let centerX = 30;
        let centerY = 39;
        let rayon = 4;
        let auteures = 10;
        let inclinaison = 15;
        let curvature = 10;
        let tangente = rayon * 0.6;




        // retrieve ligatures glyphs in the glyphs font arraay f
        // console.log(font)
        const glyphEE = font.glyphs.glyphs[504];
        const glyphTES = font.glyphs.glyphs[507];

        //opentype function to create Array of glyphs objects from a string 
        const glyphsArray = font.stringToGlyphs('Les directions')




        // record everytime there's a new mouse movement and trigger the callback function with the new event object passed as parameter
        document.addEventListener("mousemove", (event) => {

            //Erase the content of html element with .glyph class /(replace it by empty string)
            document.getElementById("svg").innerHTML = " ";
            //Reassign x coordinate for position to the initial value
            x = 70;
            //reassign (update) the value of inclinaison variable with new x coordinates of the mouse position taken from event object
            //only reassign inclinaison value every 250 milliseconds using setTimeout function
            setTimeout(function () {
                inclinaison = (event.clientX + (pageXOffset - centerX)) * 0.02
                curvature = (event.clientX + (pageXOffset - centerX)) * 0.02
            }, 150);

            //Loop on glyphs array and do something with each element (glyph) 
            glyphsArray.forEach((glyph) => {

                //Check if the glyph element is not a 'ee' ligature using the name key value inside glyph object
                //if the glyph is not a ligature transform path of the glyph into an svg and insert it in the html element with the .glyph class
                if (glyph.name === "i" ) {
                    //define center of the flame proportionally to the glyph coordinates
                    
                    centerY = 60;
                    centerX = x + 10;

                    const pathGlyphFlame = glyph.getPath(x, y, fontSize);
                    //Retrieve the command object into the path to add the flame drawing
                    const arrayCommands = pathGlyphFlame.commands;

                    // add every flame points objects into the array of commands , at the end of it, with the .push() function, 
                    arrayCommands.push({
                        type: "M",
                        x: centerX - inclinaison,
                        y: centerY - auteures

                    })

                    arrayCommands.push({
                        type: "C",
                        x1: centerX - inclinaison + curvature,
                        y1: centerY - auteures + curvature * 2,
                        x2: centerX - rayon,
                        y2: centerY - tangente,
                        x: centerX - rayon,
                        y: centerY
                    })

                    arrayCommands.push({
                        type: "C",
                        x1: centerX - rayon,
                        y1: centerY + tangente,
                        x2: centerX - tangente,
                        y2: centerY + rayon,
                        x: centerX,
                        y: centerY + rayon
                    })
                    arrayCommands.push({
                        type: "C",
                        x1: centerX + tangente,
                        y1: centerY + rayon,
                        x2: centerX + rayon,
                        y2: centerY + tangente,
                        x: centerX + rayon,
                        y: centerY
                    })
                    arrayCommands.push({
                        type: "C",
                        x1: centerX + rayon,
                        y1: centerY - tangente,
                        x2: centerX - inclinaison + curvature * 2,
                        y2: centerY - auteures + curvature,
                        x: centerX - inclinaison,
                        y: centerY - auteures
                    })

                    arrayCommands.push({
                        type: "Z"
                    })

                    //transform the new Commands array with the flame into svg and insert it in the html
                    const pathSvgFlame = pathGlyphFlame.toSVG();
                    const svgGlyphFlame = document.getElementById("svg");
                    svgGlyphFlame.insertAdjacentHTML("afterbegin", pathSvgFlame)

                } else {

                    const pathGlyph = glyph.getPath(x, y, fontSize)
                    const pathSvg = pathGlyph.toSVG()
                    const svgGlyph = document.getElementById("svg");
                    svgGlyph.insertAdjacentHTML("afterbegin", pathSvg)

                }
                // Increment x variable every time a glyph is render to do the kerning 
                x += 30;

            })
        })
    }
});