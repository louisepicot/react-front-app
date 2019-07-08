opentype.load('./fonts/Wondertype-Regular.otf', function (err, font) {
    if (err) {
        alert('Could not load font: ' + err);
    } else {

    //     const fontSize = 210;
     
       const yeglyphs = font.glyphs.glyphs;
       const glyphsArray = Object.values(yeglyphs)
        console.log(glyphsArray)
    //     let arrayPath = []
    //    glyphsArray.forEach(objectPath => {
    //        console.log(objectPath.getPath())
           
    //        objectPath.getPath()
    //        arrayPath.push(objectPath.getPath())
    //    });
    //     // let aPath = glyphsArray[1].getPath()
       

    //     var notdefGlyph = new opentype.Glyph({
    //         name: '.notdef',
    //         unicode: 0,
    //         advanceWidth: 650,
    //         path: arrayPath[0]

    //     })
    
    //     const aModifGlyph = new opentype.Glyph({
    //         index: 1,
    //         leftSideBearing: -1,
    //         name: 'A',
    //         unicode: 65,
    //         advanceWidth: 600,
    //         path: arrayPath[1]
    //     });

    //     // let bPath = glyphsArray[2].getPath()

    //     const bModifGlyph = new opentype.Glyph({
    //         index: 2,
    //         leftSideBearing: -1,
    //         name: 'B',
    //         unicode: 66,
    //         advanceWidth: 600,
    //         path: arrayPath[2]
    //     });
    //     // console.log(bPath)



    //     glyphsArray[1] = aModifGlyph
    //     glyphsArray[2] = bModifGlyph
    //     console.log("glyphsArray", glyphsArray)

    //     var font = new opentype.Font({
    //         familyName: 'testWonderType',
    //         styleName: 'Medium',
    //         unitsPerEm: 1000,
    //         ascender: 800,
    //         descender: -200,
    //         glyphs: glyphsArray
    //     });

        var notdefGlyph = new opentype.Glyph({
            name: '.notdef',
            unicode: 0,
            advanceWidth: 650,
            path: new opentype.Path()
        });

        var aPathStart = glyphsArray[1].getPath()
        var aPath = new opentype.Path();
        aPath.moveTo(100, 0);
        aPath.lineTo(100, 300);
        aPath.lineTo(300, 290);
        aPath.moveTo(290, 500);
     
   
        console.log(aPath)
        console.log(aPathStart)
        // more drawing instructions...
        var aGlyph = new opentype.Glyph({
            index: 1,
            name: 'A',
            unicode: 65,
            advanceWidth: 600,
            path: aPath
        });

        var bPath = new opentype.Path();
        bPath.moveTo(600, 300);
        bPath.lineTo(600, 500);
        bPath.lineTo(500, 900);
        bPath.lineTo(900, 300);
        // aPath.lineTo(300, 500);
        // aPath.lineTo(500, 100);
        

        var bGlyph = new opentype.Glyph({
            index: 2,
            name: 'B',
            unicode: 66,
            advanceWidth: 600,
            path: bPath
        });



   
        glyphsArray[1] = aGlyph
        glyphsArray[2] = bGlyph

        var fontNew = new opentype.Font({
            familyName: 'OpenTypeSans',
            styleName: 'Medium',
            unitsPerEm: 1000,
            ascender: 800,
            descender: -200,
            glyphs: glyphsArray
        });
        fontNew.download();


    };
});