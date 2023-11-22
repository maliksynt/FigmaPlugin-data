figma.showUI(__html__);

figma.ui.onmessage = async (msg) => {
  if (msg.type === "create-rectangles") {
    // START HERE AND DELETE ASYNC MAIN() ###############################################################

    // Load FONTS
    async function loadFonts() {
      await Promise.all([
        figma.loadFontAsync({
          family: "Roboto",
          style: "SemiBold",
        }),
        figma.loadFontAsync({
          family: "Roboto",
          style: "Bold",
        }),
        figma.loadFontAsync({
          family: "Roboto",
          style: "Regular",
        }),
      ]);
    }

    await loadFonts();

    // Create STYLE
    var white_77ad = figma.createPaintStyle();
    white_77ad.name = "White";
    white_77ad.paints = [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: { r: 1, g: 1, b: 1 },
        boundVariables: {},
      },
    ];

    // Create STYLE
    var black_4902 = figma.createPaintStyle();
    black_4902.name = "Black";
    black_4902.paints = [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: { r: 0, g: 0, b: 0 },
        boundVariables: {},
      },
    ];

    // Create STYLE
    var white_77ad = figma.createPaintStyle();
    white_77ad.name = "White";
    white_77ad.paints = [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: { r: 1, g: 1, b: 1 },
        boundVariables: {},
      },
    ];

    // Create FRAME
    var frame_4232_1288 = figma.createFrame();
    figma.currentPage.appendChild(frame_4232_1288);
    frame_4232_1288.resize(1440.0, 979.0);
    frame_4232_1288.primaryAxisSizingMode = "AUTO";
    frame_4232_1288.fillStyleId = white_77ad.id;
    frame_4232_1288.backgroundStyleId = white_77ad.id;
    frame_4232_1288.name = "Pricing / 18 /";
    frame_4232_1288.relativeTransform = [
      [1, 0, 1474],
      [0, 1, 20290],
    ];
    frame_4232_1288.x = 1474;
    frame_4232_1288.y = 20290;
    frame_4232_1288.paddingLeft = 64;
    frame_4232_1288.paddingRight = 64;
    frame_4232_1288.paddingTop = 112;
    frame_4232_1288.paddingBottom = 112;
    frame_4232_1288.counterAxisAlignItems = "CENTER";
    frame_4232_1288.strokeTopWeight = 1;
    frame_4232_1288.strokeBottomWeight = 1;
    frame_4232_1288.strokeLeftWeight = 1;
    frame_4232_1288.strokeRightWeight = 1;
    frame_4232_1288.layoutMode = "VERTICAL";
    frame_4232_1288.itemSpacing = 80;

    // Create FRAME
    var frame_4232_1289 = figma.createFrame();
    frame_4232_1288.appendChild(frame_4232_1289);
    frame_4232_1289.resize(255.0, 164.0);
    frame_4232_1289.primaryAxisSizingMode = "AUTO";
    frame_4232_1289.name = "Section Title";
    frame_4232_1289.relativeTransform = [
      [1, 0, 592.5],
      [0, 1, 112],
    ];
    frame_4232_1289.x = 592.5;
    frame_4232_1289.y = 112;
    frame_4232_1289.fills = [];
    frame_4232_1289.counterAxisAlignItems = "CENTER";
    frame_4232_1289.strokeTopWeight = 1;
    frame_4232_1289.strokeBottomWeight = 1;
    frame_4232_1289.strokeLeftWeight = 1;
    frame_4232_1289.strokeRightWeight = 1;
    frame_4232_1289.clipsContent = false;
    frame_4232_1289.layoutMode = "VERTICAL";
    frame_4232_1289.itemSpacing = 16;

    // Create TEXT
    var text_4232_1290 = figma.createText();
    frame_4232_1289.appendChild(text_4232_1290);
    text_4232_1290.fillStyleId = black_4902.id;
    text_4232_1290.resize(58.0, 26.0);
    text_4232_1290.name = "Subheading";
    text_4232_1290.relativeTransform = [
      [1, 0, 98.5],
      [0, 1, 0],
    ];
    text_4232_1290.x = 98.5;
    text_4232_1290.autoRename = false;

    // Font properties
    text_4232_1290.fontName = {
      family: "Roboto",
      style: "SemiBold",
    };
    text_4232_1290.characters = "Tagline";
    text_4232_1290.fontSize = 17;
    text_4232_1290.listSpacing = 0;
    text_4232_1290.lineHeight = { unit: "PERCENT", value: 150 };
    text_4232_1290.fontName = { family: "Roboto", style: "SemiBold" };
    text_4232_1290.textAutoResize = "HEIGHT";

    // Create FRAME
    var frame_4232_1291 = figma.createFrame();
    frame_4232_1289.appendChild(frame_4232_1291);
    frame_4232_1291.resize(255.0, 122.0);
    frame_4232_1291.primaryAxisSizingMode = "AUTO";
    frame_4232_1291.name = "Content";
    frame_4232_1291.relativeTransform = [
      [1, 0, 0],
      [0, 1, 42],
    ];
    frame_4232_1291.y = 42;
    frame_4232_1291.layoutAlign = "STRETCH";
    frame_4232_1291.fills = [];
    frame_4232_1291.counterAxisAlignItems = "CENTER";
    frame_4232_1291.strokeTopWeight = 1;
    frame_4232_1291.strokeBottomWeight = 1;
    frame_4232_1291.strokeLeftWeight = 1;
    frame_4232_1291.strokeRightWeight = 1;
    frame_4232_1291.clipsContent = false;
    frame_4232_1291.layoutMode = "VERTICAL";
    frame_4232_1291.itemSpacing = 24;

    // Create TEXT
    var text_4232_1292 = figma.createText();
    frame_4232_1291.appendChild(text_4232_1292);
    text_4232_1292.fillStyleId = black_4902.id;
    text_4232_1292.resize(258.0, 72.0);
    text_4232_1292.name = "Heading";
    text_4232_1292.relativeTransform = [
      [1, 0, -1.5],
      [0, 1, 0],
    ];
    text_4232_1292.x = -1.5;
    text_4232_1292.autoRename = false;

    // Font properties
    text_4232_1292.fontName = {
      family: "Roboto",
      style: "Bold",
    };
    text_4232_1292.characters = "Pricing plan";
    text_4232_1292.fontSize = 48;
    text_4232_1292.listSpacing = 0;
    text_4232_1292.lineHeight = { unit: "PERCENT", value: 150 };
    text_4232_1292.fontName = { family: "Roboto", style: "Bold" };
    text_4232_1292.textAutoResize = "WIDTH_AND_HEIGHT";

    // Create TEXT
    var text_4232_1293 = figma.createText();
    frame_4232_1291.appendChild(text_4232_1293);
    text_4232_1293.fillStyleId = black_4902.id;
    text_4232_1293.resize(419.0, 26.0);
    text_4232_1293.relativeTransform = [
      [1, 0, -82],
      [0, 1, 96],
    ];
    text_4232_1293.x = -82;
    text_4232_1293.y = 96;
    text_4232_1293.autoRename = false;

    // Font properties
    text_4232_1293.fontName = {
      family: "Roboto",
      style: "Regular",
    };
    text_4232_1293.characters =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ";
    text_4232_1293.fontSize = 17;
    text_4232_1293.listSpacing = 0;
    text_4232_1293.lineHeight = { unit: "PERCENT", value: 150 };
    text_4232_1293.textAutoResize = "WIDTH_AND_HEIGHT";

    // Create FRAME
    var frame_4232_1294 = figma.createFrame();
    frame_4232_1288.appendChild(frame_4232_1294);
    frame_4232_1294.resize(1312.0, 511.0);
    frame_4232_1294.counterAxisSizingMode = "AUTO";
    frame_4232_1294.name = "Content";
    frame_4232_1294.relativeTransform = [
      [1, 0, 64],
      [0, 1, 356],
    ];
    frame_4232_1294.x = 64;
    frame_4232_1294.y = 356;
    frame_4232_1294.layoutAlign = "STRETCH";
    frame_4232_1294.fills = [];
    frame_4232_1294.paddingLeft = 10;
    frame_4232_1294.paddingRight = 10;
    frame_4232_1294.paddingTop = 10;
    frame_4232_1294.paddingBottom = 10;
    frame_4232_1294.counterAxisAlignItems = "CENTER";
    frame_4232_1294.primaryAxisSizingMode = "FIXED";
    frame_4232_1294.strokeTopWeight = 1;
    frame_4232_1294.strokeBottomWeight = 1;
    frame_4232_1294.strokeLeftWeight = 1;
    frame_4232_1294.strokeRightWeight = 1;
    frame_4232_1294.clipsContent = false;
    frame_4232_1294.counterAxisSizingMode = "AUTO";
    frame_4232_1294.itemSpacing = 10;

    // Create RECTANGLE
    var rectangle_4235_1737 = figma.createRectangle();
    frame_4232_1294.appendChild(rectangle_4235_1737);
    rectangle_4235_1737.resize(409.0, 511.0);
    rectangle_4235_1737.name = "Rectangle 1";
    rectangle_4235_1737.fills = [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: { r: 1, g: 1, b: 1 },
        boundVariables: {},
      },
    ];
    rectangle_4235_1737.strokes = [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: { r: 0, g: 0, b: 0 },
        boundVariables: {},
      },
    ];
    rectangle_4235_1737.strokeTopWeight = 1;
    rectangle_4235_1737.strokeBottomWeight = 1;
    rectangle_4235_1737.strokeLeftWeight = 1;
    rectangle_4235_1737.strokeRightWeight = 1;

    // Create VECTOR
    var vector_4235_1740 = figma.createVector();
    frame_4232_1294.appendChild(vector_4235_1740);
    vector_4235_1740.resize(409.0, 511.0);
    vector_4235_1740.name = "Rectangle 2";
    vector_4235_1740.fills = [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: { r: 1, g: 1, b: 1 },
        boundVariables: {},
      },
    ];
    vector_4235_1740.strokes = [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: { r: 0, g: 0, b: 0 },
        boundVariables: {},
      },
    ];
    vector_4235_1740.strokeAlign = "INSIDE";
    vector_4235_1740.relativeTransform = [
      [1, 0, 442],
      [0, 1, 0],
    ];
    vector_4235_1740.x = 442;
    vector_4235_1740.vectorNetwork = {
      regions: [
        {
          windingRule: "NONZERO",
          loops: [[0, 1, 2, 3]],
          fills: [
            {
              type: "SOLID",
              visible: true,
              opacity: 1,
              blendMode: "NORMAL",
              color: { r: 1, g: 1, b: 1 },
              boundVariables: {},
            },
          ],
          fillStyleId: "",
        },
      ],
      segments: [
        {
          start: 0,
          end: 1,
          tangentStart: { x: 0, y: 0 },
          tangentEnd: { x: 0, y: 0 },
        },
        {
          start: 1,
          end: 2,
          tangentStart: { x: 0, y: 0 },
          tangentEnd: { x: 0, y: 0 },
        },
        {
          start: 2,
          end: 3,
          tangentStart: { x: 0, y: 0 },
          tangentEnd: { x: 0, y: 0 },
        },
        {
          start: 3,
          end: 0,
          tangentStart: { x: 0, y: 0 },
          tangentEnd: { x: 0, y: 0 },
        },
      ],
      vertices: [
        {
          x: 0,
          y: 0,
          strokeCap: "NONE",
          strokeJoin: "MITER",
          cornerRadius: 0,
          handleMirroring: "NONE",
        },
        {
          x: 409,
          y: 0,
          strokeCap: "NONE",
          strokeJoin: "MITER",
          cornerRadius: 0,
          handleMirroring: "NONE",
        },
        {
          x: 409,
          y: 511,
          strokeCap: "NONE",
          strokeJoin: "MITER",
          cornerRadius: 0,
          handleMirroring: "NONE",
        },
        {
          x: 0,
          y: 511,
          strokeCap: "NONE",
          strokeJoin: "MITER",
          cornerRadius: 0,
          handleMirroring: "NONE",
        },
      ],
    };
    vector_4235_1740.vectorPaths = [
      {
        windingRule: "NONZERO",
        data: "M 0 0 L 409 0 L 409 511 L 0 511 L 0 0 Z",
      },
    ];

    // Create VECTOR
    var vector_4235_1743 = figma.createVector();
    frame_4232_1294.appendChild(vector_4235_1743);
    vector_4235_1743.resize(409.0, 511.0);
    vector_4235_1743.name = "Rectangle 3";
    vector_4235_1743.fills = [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: { r: 1, g: 1, b: 1 },
        boundVariables: {},
      },
    ];
    vector_4235_1743.strokes = [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: { r: 0, g: 0, b: 0 },
        boundVariables: {},
      },
    ];
    vector_4235_1743.strokeAlign = "INSIDE";
    vector_4235_1743.relativeTransform = [
      [1, 0, 897],
      [0, 1, 0],
    ];
    vector_4235_1743.x = 897;
    vector_4235_1743.vectorNetwork = {
      regions: [
        {
          windingRule: "NONZERO",
          loops: [[0, 1, 2, 3]],
          fills: [
            {
              type: "SOLID",
              visible: true,
              opacity: 1,
              blendMode: "NORMAL",
              color: { r: 1, g: 1, b: 1 },
              boundVariables: {},
            },
          ],
          fillStyleId: "",
        },
      ],
      segments: [
        {
          start: 0,
          end: 1,
          tangentStart: { x: 0, y: 0 },
          tangentEnd: { x: 0, y: 0 },
        },
        {
          start: 1,
          end: 2,
          tangentStart: { x: 0, y: 0 },
          tangentEnd: { x: 0, y: 0 },
        },
        {
          start: 2,
          end: 3,
          tangentStart: { x: 0, y: 0 },
          tangentEnd: { x: 0, y: 0 },
        },
        {
          start: 3,
          end: 0,
          tangentStart: { x: 0, y: 0 },
          tangentEnd: { x: 0, y: 0 },
        },
      ],
      vertices: [
        {
          x: 0,
          y: 0,
          strokeCap: "NONE",
          strokeJoin: "MITER",
          cornerRadius: 0,
          handleMirroring: "NONE",
        },
        {
          x: 409,
          y: 0,
          strokeCap: "NONE",
          strokeJoin: "MITER",
          cornerRadius: 0,
          handleMirroring: "NONE",
        },
        {
          x: 409,
          y: 511,
          strokeCap: "NONE",
          strokeJoin: "MITER",
          cornerRadius: 0,
          handleMirroring: "NONE",
        },
        {
          x: 0,
          y: 511,
          strokeCap: "NONE",
          strokeJoin: "MITER",
          cornerRadius: 0,
          handleMirroring: "NONE",
        },
      ],
    };
    vector_4235_1743.vectorPaths = [
      {
        windingRule: "NONZERO",
        data: "M 0 0 L 409 0 L 409 511 L 0 511 L 0 0 Z",
      },
    ];

    // Create TEXT
    var text_4235_1831 = figma.createText();
    frame_4232_1294.appendChild(text_4235_1831);
    text_4235_1831.resize(112.0, 36.0);
    text_4235_1831.name = "Basic plan";
    text_4235_1831.fills = [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: { r: 0, g: 0, b: 0 },
        boundVariables: {},
      },
    ];
    text_4235_1831.relativeTransform = [
      [1, 0, 149],
      [0, 1, 34],
    ];
    text_4235_1831.x = 149;
    text_4235_1831.y = 34;

    // Font properties
    text_4235_1831.fontName = {
      family: "Roboto",
      style: "Bold",
    };
    text_4235_1831.characters = "Basic plan";
    text_4235_1831.fontSize = 24;
    text_4235_1831.listSpacing = 0;
    text_4235_1831.lineHeight = { unit: "PERCENT", value: 150 };
    text_4235_1831.fontName = { family: "Roboto", style: "Bold" };
    text_4235_1831.textAutoResize = "WIDTH_AND_HEIGHT";

    // Create TEXT
    var text_4235_1923 = figma.createText();
    frame_4232_1294.appendChild(text_4235_1923);
    text_4235_1923.resize(58.0, 48.0);
    text_4235_1923.name = "/mo";
    text_4235_1923.fills = [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: { r: 0, g: 0, b: 0 },
        boundVariables: {},
      },
    ];
    text_4235_1923.relativeTransform = [
      [1, 0, 235],
      [0, 1, 105],
    ];
    text_4235_1923.x = 235;
    text_4235_1923.y = 105;

    // Font properties
    text_4235_1923.fontName = {
      family: "Roboto",
      style: "Bold",
    };
    text_4235_1923.characters = "/mo";
    text_4235_1923.fontSize = 32;
    text_4235_1923.listSpacing = 0;
    text_4235_1923.lineHeight = { unit: "PERCENT", value: 150 };
    text_4235_1923.fontName = { family: "Roboto", style: "Bold" };
    text_4235_1923.textAutoResize = "WIDTH_AND_HEIGHT";

    // Create TEXT
    var text_4235_2014 = figma.createText();
    frame_4232_1294.appendChild(text_4235_2014);
    text_4235_2014.resize(58.0, 48.0);
    text_4235_2014.name = "/mo";
    text_4235_2014.fills = [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: { r: 0, g: 0, b: 0 },
        boundVariables: {},
      },
    ];
    text_4235_2014.relativeTransform = [
      [1, 0, 674],
      [0, 1, 105],
    ];
    text_4235_2014.x = 674;
    text_4235_2014.y = 105;

    // Font properties
    text_4235_2014.fontName = {
      family: "Roboto",
      style: "Bold",
    };
    text_4235_2014.characters = "/mo";
    text_4235_2014.fontSize = 32;
    text_4235_2014.listSpacing = 0;
    text_4235_2014.lineHeight = { unit: "PERCENT", value: 150 };
    text_4235_2014.fontName = { family: "Roboto", style: "Bold" };
    text_4235_2014.textAutoResize = "WIDTH_AND_HEIGHT";

    // Create TEXT
    var text_4235_2016 = figma.createText();
    frame_4232_1294.appendChild(text_4235_2016);
    text_4235_2016.resize(58.0, 48.0);
    text_4235_2016.name = "/mo";
    text_4235_2016.fills = [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: { r: 0, g: 0, b: 0 },
        boundVariables: {},
      },
    ];
    text_4235_2016.relativeTransform = [
      [1, 0, 1129],
      [0, 1, 105],
    ];
    text_4235_2016.x = 1129;
    text_4235_2016.y = 105;

    // Font properties
    text_4235_2016.fontName = {
      family: "Roboto",
      style: "Bold",
    };
    text_4235_2016.characters = "/mo";
    text_4235_2016.fontSize = 32;
    text_4235_2016.listSpacing = 0;
    text_4235_2016.lineHeight = { unit: "PERCENT", value: 150 };
    text_4235_2016.fontName = { family: "Roboto", style: "Bold" };
    text_4235_2016.textAutoResize = "WIDTH_AND_HEIGHT";

    // Create TEXT
    var text_4235_1922 = figma.createText();
    frame_4232_1294.appendChild(text_4235_1922);
    text_4235_1922.resize(111.0, 96.0);
    text_4235_1922.name = "$19";
    text_4235_1922.fills = [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: { r: 0, g: 0, b: 0 },
        boundVariables: {},
      },
    ];
    text_4235_1922.relativeTransform = [
      [1, 0, 122],
      [0, 1, 70],
    ];
    text_4235_1922.x = 122;
    text_4235_1922.y = 70;

    // Font properties
    text_4235_1922.fontName = {
      family: "Roboto",
      style: "Bold",
    };
    text_4235_1922.characters = "$19";
    text_4235_1922.fontSize = 64;
    text_4235_1922.listSpacing = 0;
    text_4235_1922.lineHeight = { unit: "PERCENT", value: 150 };
    text_4235_1922.fontName = { family: "Roboto", style: "Bold" };
    text_4235_1922.textAutoResize = "WIDTH_AND_HEIGHT";

    // Create TEXT
    var text_4235_2015 = figma.createText();
    frame_4232_1294.appendChild(text_4235_2015);
    text_4235_2015.resize(111.0, 96.0);
    text_4235_2015.name = "$29";
    text_4235_2015.fills = [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: { r: 0, g: 0, b: 0 },
        boundVariables: {},
      },
    ];
    text_4235_2015.relativeTransform = [
      [1, 0, 561],
      [0, 1, 70],
    ];
    text_4235_2015.x = 561;
    text_4235_2015.y = 70;

    // Font properties
    text_4235_2015.fontName = {
      family: "Roboto",
      style: "Bold",
    };
    text_4235_2015.characters = "$29";
    text_4235_2015.fontSize = 64;
    text_4235_2015.listSpacing = 0;
    text_4235_2015.lineHeight = { unit: "PERCENT", value: 150 };
    text_4235_2015.fontName = { family: "Roboto", style: "Bold" };
    text_4235_2015.textAutoResize = "WIDTH_AND_HEIGHT";

    // Create TEXT
    var text_4235_2017 = figma.createText();
    frame_4232_1294.appendChild(text_4235_2017);
    text_4235_2017.resize(111.0, 96.0);
    text_4235_2017.name = "$49";
    text_4235_2017.fills = [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: { r: 0, g: 0, b: 0 },
        boundVariables: {},
      },
    ];
    text_4235_2017.relativeTransform = [
      [1, 0, 1016],
      [0, 1, 70],
    ];
    text_4235_2017.x = 1016;
    text_4235_2017.y = 70;

    // Font properties
    text_4235_2017.fontName = {
      family: "Roboto",
      style: "Bold",
    };
    text_4235_2017.characters = "$49";
    text_4235_2017.fontSize = 64;
    text_4235_2017.listSpacing = 0;
    text_4235_2017.lineHeight = { unit: "PERCENT", value: 150 };
    text_4235_2017.fontName = { family: "Roboto", style: "Bold" };
    text_4235_2017.textAutoResize = "WIDTH_AND_HEIGHT";

    // Create TEXT
    var text_4235_1920 = figma.createText();
    frame_4232_1294.appendChild(text_4235_1920);
    text_4235_1920.resize(151.0, 36.0);
    text_4235_1920.name = "Business plan";
    text_4235_1920.fills = [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: { r: 0, g: 0, b: 0 },
        boundVariables: {},
      },
    ];
    text_4235_1920.relativeTransform = [
      [1, 0, 572],
      [0, 1, 34],
    ];
    text_4235_1920.x = 572;
    text_4235_1920.y = 34;

    // Font properties
    text_4235_1920.fontName = {
      family: "Roboto",
      style: "Bold",
    };
    text_4235_1920.characters = "Business plan";
    text_4235_1920.fontSize = 24;
    text_4235_1920.listSpacing = 0;
    text_4235_1920.lineHeight = { unit: "PERCENT", value: 150 };
    text_4235_1920.fontName = { family: "Roboto", style: "Bold" };
    text_4235_1920.textAutoResize = "WIDTH_AND_HEIGHT";

    // Create TEXT
    var text_4235_1921 = figma.createText();
    frame_4232_1294.appendChild(text_4235_1921);
    text_4235_1921.resize(163.0, 36.0);
    text_4235_1921.name = "Entreprise plan";
    text_4235_1921.fills = [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: { r: 0, g: 0, b: 0 },
        boundVariables: {},
      },
    ];
    text_4235_1921.relativeTransform = [
      [1, 0, 1021],
      [0, 1, 34],
    ];
    text_4235_1921.x = 1021;
    text_4235_1921.y = 34;

    // Font properties
    text_4235_1921.fontName = {
      family: "Roboto",
      style: "Bold",
    };
    text_4235_1921.characters = "Entreprise plan";
    text_4235_1921.fontSize = 24;
    text_4235_1921.listSpacing = 0;
    text_4235_1921.lineHeight = { unit: "PERCENT", value: 150 };
    text_4235_1921.fontName = { family: "Roboto", style: "Bold" };
    text_4235_1921.textAutoResize = "WIDTH_AND_HEIGHT";

    // Create TEXT
    var text_4235_2018 = figma.createText();
    frame_4232_1294.appendChild(text_4235_2018);
    text_4235_2018.resize(101.0, 24.0);
    text_4235_2018.name = "or $199 yearly";
    text_4235_2018.fills = [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: { r: 0, g: 0, b: 0 },
        boundVariables: {},
      },
    ];
    text_4235_2018.relativeTransform = [
      [1, 0, 154],
      [0, 1, 161],
    ];
    text_4235_2018.x = 154;
    text_4235_2018.y = 161;

    // Font properties
    text_4235_2018.fontName = {
      family: "Roboto",
      style: "Regular",
    };
    text_4235_2018.characters = "or $199 yearly";
    text_4235_2018.fontSize = 16;
    text_4235_2018.listSpacing = 0;
    text_4235_2018.lineHeight = { unit: "PERCENT", value: 150 };
    text_4235_2018.textAutoResize = "WIDTH_AND_HEIGHT";

    // Create TEXT
    var text_4235_2019 = figma.createText();
    frame_4232_1294.appendChild(text_4235_2019);
    text_4235_2019.resize(101.0, 24.0);
    text_4235_2019.name = "or $199 yearly";
    text_4235_2019.fills = [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: { r: 0, g: 0, b: 0 },
        boundVariables: {},
      },
    ];
    text_4235_2019.relativeTransform = [
      [1, 0, 596],
      [0, 1, 161],
    ];
    text_4235_2019.x = 596;
    text_4235_2019.y = 161;

    // Font properties
    text_4235_2019.fontName = {
      family: "Roboto",
      style: "Regular",
    };
    text_4235_2019.characters = "or $199 yearly";
    text_4235_2019.fontSize = 16;
    text_4235_2019.listSpacing = 0;
    text_4235_2019.lineHeight = { unit: "PERCENT", value: 150 };
    text_4235_2019.textAutoResize = "WIDTH_AND_HEIGHT";

    // Create TEXT
    var text_4235_2020 = figma.createText();
    frame_4232_1294.appendChild(text_4235_2020);
    text_4235_2020.resize(101.0, 24.0);
    text_4235_2020.name = "or $199 yearly";
    text_4235_2020.fills = [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: { r: 0, g: 0, b: 0 },
        boundVariables: {},
      },
    ];
    text_4235_2020.relativeTransform = [
      [1, 0, 1051],
      [0, 1, 161],
    ];
    text_4235_2020.x = 1051;
    text_4235_2020.y = 161;

    // Font properties
    text_4235_2020.fontName = {
      family: "Roboto",
      style: "Regular",
    };
    text_4235_2020.characters = "or $199 yearly";
    text_4235_2020.fontSize = 16;
    text_4235_2020.listSpacing = 0;
    text_4235_2020.lineHeight = { unit: "PERCENT", value: 150 };
    text_4235_2020.textAutoResize = "WIDTH_AND_HEIGHT";

    // Create TEXT
    var text_4235_2021 = figma.createText();
    frame_4232_1294.appendChild(text_4235_2021);
    text_4235_2021.resize(159.0, 24.0);
    text_4235_2021.name = "Feature text goes here";
    text_4235_2021.fills = [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: { r: 0, g: 0, b: 0 },
        boundVariables: {},
      },
    ];
    text_4235_2021.relativeTransform = [
      [1, 0, 46],
      [0, 1, 225],
    ];
    text_4235_2021.x = 46;
    text_4235_2021.y = 225;

    // Font properties
    text_4235_2021.fontName = {
      family: "Roboto",
      style: "Regular",
    };
    text_4235_2021.characters = "Feature text goes here";
    text_4235_2021.fontSize = 16;
    text_4235_2021.listSpacing = 0;
    text_4235_2021.lineHeight = { unit: "PERCENT", value: 150 };
    text_4235_2021.textAutoResize = "WIDTH_AND_HEIGHT";

    // Create TEXT
    var text_4235_2024 = figma.createText();
    frame_4232_1294.appendChild(text_4235_2024);
    text_4235_2024.resize(159.0, 24.0);
    text_4235_2024.name = "Feature text goes here";
    text_4235_2024.fills = [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: { r: 0, g: 0, b: 0 },
        boundVariables: {},
      },
    ];
    text_4235_2024.relativeTransform = [
      [1, 0, 492],
      [0, 1, 225],
    ];
    text_4235_2024.x = 492;
    text_4235_2024.y = 225;

    // Font properties
    text_4235_2024.fontName = {
      family: "Roboto",
      style: "Regular",
    };
    text_4235_2024.characters = "Feature text goes here";
    text_4235_2024.fontSize = 16;
    text_4235_2024.listSpacing = 0;
    text_4235_2024.lineHeight = { unit: "PERCENT", value: 150 };
    text_4235_2024.textAutoResize = "WIDTH_AND_HEIGHT";

    // Create TEXT
    var text_4235_2027 = figma.createText();
    frame_4232_1294.appendChild(text_4235_2027);
    text_4235_2027.resize(159.0, 24.0);
    text_4235_2027.name = "Feature text goes here";
    text_4235_2027.fills = [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: { r: 0, g: 0, b: 0 },
        boundVariables: {},
      },
    ];
    text_4235_2027.relativeTransform = [
      [1, 0, 944],
      [0, 1, 225],
    ];
    text_4235_2027.x = 944;
    text_4235_2027.y = 225;

    // Font properties
    text_4235_2027.fontName = {
      family: "Roboto",
      style: "Regular",
    };
    text_4235_2027.characters = "Feature text goes here";
    text_4235_2027.fontSize = 16;
    text_4235_2027.listSpacing = 0;
    text_4235_2027.lineHeight = { unit: "PERCENT", value: 150 };
    text_4235_2027.textAutoResize = "WIDTH_AND_HEIGHT";

    // Create TEXT
    var text_4235_2022 = figma.createText();
    frame_4232_1294.appendChild(text_4235_2022);
    text_4235_2022.resize(159.0, 24.0);
    text_4235_2022.name = "Feature text goes here";
    text_4235_2022.fills = [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: { r: 0, g: 0, b: 0 },
        boundVariables: {},
      },
    ];
    text_4235_2022.relativeTransform = [
      [1, 0, 46],
      [0, 1, 268],
    ];
    text_4235_2022.x = 46;
    text_4235_2022.y = 268;

    // Font properties
    text_4235_2022.fontName = {
      family: "Roboto",
      style: "Regular",
    };
    text_4235_2022.characters = "Feature text goes here";
    text_4235_2022.fontSize = 16;
    text_4235_2022.listSpacing = 0;
    text_4235_2022.lineHeight = { unit: "PERCENT", value: 150 };
    text_4235_2022.textAutoResize = "WIDTH_AND_HEIGHT";

    // Create TEXT
    var text_4235_2025 = figma.createText();
    frame_4232_1294.appendChild(text_4235_2025);
    text_4235_2025.resize(159.0, 24.0);
    text_4235_2025.name = "Feature text goes here";
    text_4235_2025.fills = [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: { r: 0, g: 0, b: 0 },
        boundVariables: {},
      },
    ];
    text_4235_2025.relativeTransform = [
      [1, 0, 492],
      [0, 1, 268],
    ];
    text_4235_2025.x = 492;
    text_4235_2025.y = 268;

    // Font properties
    text_4235_2025.fontName = {
      family: "Roboto",
      style: "Regular",
    };
    text_4235_2025.characters = "Feature text goes here";
    text_4235_2025.fontSize = 16;
    text_4235_2025.listSpacing = 0;
    text_4235_2025.lineHeight = { unit: "PERCENT", value: 150 };
    text_4235_2025.textAutoResize = "WIDTH_AND_HEIGHT";

    // Create TEXT
    var text_4235_2028 = figma.createText();
    frame_4232_1294.appendChild(text_4235_2028);
    text_4235_2028.resize(159.0, 24.0);
    text_4235_2028.name = "Feature text goes here";
    text_4235_2028.fills = [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: { r: 0, g: 0, b: 0 },
        boundVariables: {},
      },
    ];
    text_4235_2028.relativeTransform = [
      [1, 0, 944],
      [0, 1, 268],
    ];
    text_4235_2028.x = 944;
    text_4235_2028.y = 268;

    // Font properties
    text_4235_2028.fontName = {
      family: "Roboto",
      style: "Regular",
    };
    text_4235_2028.characters = "Feature text goes here";
    text_4235_2028.fontSize = 16;
    text_4235_2028.listSpacing = 0;
    text_4235_2028.lineHeight = { unit: "PERCENT", value: 150 };
    text_4235_2028.textAutoResize = "WIDTH_AND_HEIGHT";

    // Create TEXT
    var text_4235_2026 = figma.createText();
    frame_4232_1294.appendChild(text_4235_2026);
    text_4235_2026.resize(159.0, 24.0);
    text_4235_2026.name = "Feature text goes here";
    text_4235_2026.fills = [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: { r: 0, g: 0, b: 0 },
        boundVariables: {},
      },
    ];
    text_4235_2026.relativeTransform = [
      [1, 0, 492],
      [0, 1, 310],
    ];
    text_4235_2026.x = 492;
    text_4235_2026.y = 310;

    // Font properties
    text_4235_2026.fontName = {
      family: "Roboto",
      style: "Regular",
    };
    text_4235_2026.characters = "Feature text goes here";
    text_4235_2026.fontSize = 16;
    text_4235_2026.listSpacing = 0;
    text_4235_2026.lineHeight = { unit: "PERCENT", value: 150 };
    text_4235_2026.textAutoResize = "WIDTH_AND_HEIGHT";

    // Create TEXT
    var text_4235_2029 = figma.createText();
    frame_4232_1294.appendChild(text_4235_2029);
    text_4235_2029.resize(159.0, 24.0);
    text_4235_2029.name = "Feature text goes here";
    text_4235_2029.fills = [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: { r: 0, g: 0, b: 0 },
        boundVariables: {},
      },
    ];
    text_4235_2029.relativeTransform = [
      [1, 0, 944],
      [0, 1, 310],
    ];
    text_4235_2029.x = 944;
    text_4235_2029.y = 310;

    // Font properties
    text_4235_2029.fontName = {
      family: "Roboto",
      style: "Regular",
    };
    text_4235_2029.characters = "Feature text goes here";
    text_4235_2029.fontSize = 16;
    text_4235_2029.listSpacing = 0;
    text_4235_2029.lineHeight = { unit: "PERCENT", value: 150 };
    text_4235_2029.textAutoResize = "WIDTH_AND_HEIGHT";

    // Create TEXT
    var text_4235_2031 = figma.createText();
    frame_4232_1294.appendChild(text_4235_2031);
    text_4235_2031.resize(159.0, 24.0);
    text_4235_2031.name = "Feature text goes here";
    text_4235_2031.fills = [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: { r: 0, g: 0, b: 0 },
        boundVariables: {},
      },
    ];
    text_4235_2031.relativeTransform = [
      [1, 0, 944],
      [0, 1, 353],
    ];
    text_4235_2031.x = 944;
    text_4235_2031.y = 353;

    // Font properties
    text_4235_2031.fontName = {
      family: "Roboto",
      style: "Regular",
    };
    text_4235_2031.characters = "Feature text goes here";
    text_4235_2031.fontSize = 16;
    text_4235_2031.listSpacing = 0;
    text_4235_2031.lineHeight = { unit: "PERCENT", value: 150 };
    text_4235_2031.textAutoResize = "WIDTH_AND_HEIGHT";

    // Create VECTOR
    var vector_4235_2033 = figma.createVector();
    frame_4232_1294.appendChild(vector_4235_2033);
    vector_4235_2033.resize(328.0, 48.0);
    vector_4235_2033.name = "Rectangle 4";
    vector_4235_2033.fills = [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: { r: 0, g: 0, b: 0 },
        boundVariables: {},
      },
    ];
    vector_4235_2033.strokes = [];
    vector_4235_2033.strokeAlign = "INSIDE";
    vector_4235_2033.relativeTransform = [
      [1, 0, 41],
      [0, 1, 435],
    ];
    vector_4235_2033.x = 41;
    vector_4235_2033.y = 435;
    vector_4235_2033.vectorNetwork = {
      regions: [
        {
          windingRule: "NONZERO",
          loops: [[0, 1, 2, 3]],
          fills: [
            {
              type: "SOLID",
              visible: true,
              opacity: 1,
              blendMode: "NORMAL",
              color: { r: 0, g: 0, b: 0 },
              boundVariables: {},
            },
          ],
          fillStyleId: "",
        },
      ],
      segments: [
        {
          start: 0,
          end: 1,
          tangentStart: { x: 0, y: 0 },
          tangentEnd: { x: 0, y: 0 },
        },
        {
          start: 1,
          end: 2,
          tangentStart: { x: 0, y: 0 },
          tangentEnd: { x: 0, y: 0 },
        },
        {
          start: 2,
          end: 3,
          tangentStart: { x: 0, y: 0 },
          tangentEnd: { x: 0, y: 0 },
        },
        {
          start: 3,
          end: 0,
          tangentStart: { x: 0, y: 0 },
          tangentEnd: { x: 0, y: 0 },
        },
      ],
      vertices: [
        {
          x: 0,
          y: 0,
          strokeCap: "NONE",
          strokeJoin: "MITER",
          cornerRadius: 0,
          handleMirroring: "NONE",
        },
        {
          x: 328,
          y: 0,
          strokeCap: "NONE",
          strokeJoin: "MITER",
          cornerRadius: 0,
          handleMirroring: "NONE",
        },
        {
          x: 328,
          y: 48,
          strokeCap: "NONE",
          strokeJoin: "MITER",
          cornerRadius: 0,
          handleMirroring: "NONE",
        },
        {
          x: 0,
          y: 48,
          strokeCap: "NONE",
          strokeJoin: "MITER",
          cornerRadius: 0,
          handleMirroring: "NONE",
        },
      ],
    };
    vector_4235_2033.vectorPaths = [
      { windingRule: "NONZERO", data: "M 0 0 L 328 0 L 328 48 L 0 48 L 0 0 Z" },
    ];

    // Create VECTOR
    var vector_4235_2035 = figma.createVector();
    frame_4232_1294.appendChild(vector_4235_2035);
    vector_4235_2035.resize(328.0, 48.0);
    vector_4235_2035.name = "Rectangle 5";
    vector_4235_2035.fills = [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: { r: 0, g: 0, b: 0 },
        boundVariables: {},
      },
    ];
    vector_4235_2035.strokes = [];
    vector_4235_2035.strokeAlign = "INSIDE";
    vector_4235_2035.relativeTransform = [
      [1, 0, 492],
      [0, 1, 435],
    ];
    vector_4235_2035.x = 492;
    vector_4235_2035.y = 435;
    vector_4235_2035.vectorNetwork = {
      regions: [
        {
          windingRule: "NONZERO",
          loops: [[0, 1, 2, 3]],
          fills: [
            {
              type: "SOLID",
              visible: true,
              opacity: 1,
              blendMode: "NORMAL",
              color: { r: 0, g: 0, b: 0 },
              boundVariables: {},
            },
          ],
          fillStyleId: "",
        },
      ],
      segments: [
        {
          start: 0,
          end: 1,
          tangentStart: { x: 0, y: 0 },
          tangentEnd: { x: 0, y: 0 },
        },
        {
          start: 1,
          end: 2,
          tangentStart: { x: 0, y: 0 },
          tangentEnd: { x: 0, y: 0 },
        },
        {
          start: 2,
          end: 3,
          tangentStart: { x: 0, y: 0 },
          tangentEnd: { x: 0, y: 0 },
        },
        {
          start: 3,
          end: 0,
          tangentStart: { x: 0, y: 0 },
          tangentEnd: { x: 0, y: 0 },
        },
      ],
      vertices: [
        {
          x: 0,
          y: 0,
          strokeCap: "NONE",
          strokeJoin: "MITER",
          cornerRadius: 0,
          handleMirroring: "NONE",
        },
        {
          x: 328,
          y: 0,
          strokeCap: "NONE",
          strokeJoin: "MITER",
          cornerRadius: 0,
          handleMirroring: "NONE",
        },
        {
          x: 328,
          y: 48,
          strokeCap: "NONE",
          strokeJoin: "MITER",
          cornerRadius: 0,
          handleMirroring: "NONE",
        },
        {
          x: 0,
          y: 48,
          strokeCap: "NONE",
          strokeJoin: "MITER",
          cornerRadius: 0,
          handleMirroring: "NONE",
        },
      ],
    };
    vector_4235_2035.vectorPaths = [
      { windingRule: "NONZERO", data: "M 0 0 L 328 0 L 328 48 L 0 48 L 0 0 Z" },
    ];

    // Create VECTOR
    var vector_4235_2036 = figma.createVector();
    frame_4232_1294.appendChild(vector_4235_2036);
    vector_4235_2036.resize(328.0, 48.0);
    vector_4235_2036.name = "Rectangle 6";
    vector_4235_2036.fills = [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: { r: 0, g: 0, b: 0 },
        boundVariables: {},
      },
    ];
    vector_4235_2036.strokes = [];
    vector_4235_2036.strokeAlign = "INSIDE";
    vector_4235_2036.relativeTransform = [
      [1, 0, 938],
      [0, 1, 435],
    ];
    vector_4235_2036.x = 938;
    vector_4235_2036.y = 435;
    vector_4235_2036.vectorNetwork = {
      regions: [
        {
          windingRule: "NONZERO",
          loops: [[0, 1, 2, 3]],
          fills: [
            {
              type: "SOLID",
              visible: true,
              opacity: 1,
              blendMode: "NORMAL",
              color: { r: 0, g: 0, b: 0 },
              boundVariables: {},
            },
          ],
          fillStyleId: "",
        },
      ],
      segments: [
        {
          start: 0,
          end: 1,
          tangentStart: { x: 0, y: 0 },
          tangentEnd: { x: 0, y: 0 },
        },
        {
          start: 1,
          end: 2,
          tangentStart: { x: 0, y: 0 },
          tangentEnd: { x: 0, y: 0 },
        },
        {
          start: 2,
          end: 3,
          tangentStart: { x: 0, y: 0 },
          tangentEnd: { x: 0, y: 0 },
        },
        {
          start: 3,
          end: 0,
          tangentStart: { x: 0, y: 0 },
          tangentEnd: { x: 0, y: 0 },
        },
      ],
      vertices: [
        {
          x: 0,
          y: 0,
          strokeCap: "NONE",
          strokeJoin: "MITER",
          cornerRadius: 0,
          handleMirroring: "NONE",
        },
        {
          x: 328,
          y: 0,
          strokeCap: "NONE",
          strokeJoin: "MITER",
          cornerRadius: 0,
          handleMirroring: "NONE",
        },
        {
          x: 328,
          y: 48,
          strokeCap: "NONE",
          strokeJoin: "MITER",
          cornerRadius: 0,
          handleMirroring: "NONE",
        },
        {
          x: 0,
          y: 48,
          strokeCap: "NONE",
          strokeJoin: "MITER",
          cornerRadius: 0,
          handleMirroring: "NONE",
        },
      ],
    };
    vector_4235_2036.vectorPaths = [
      { windingRule: "NONZERO", data: "M 0 0 L 328 0 L 328 48 L 0 48 L 0 0 Z" },
    ];

    // Create TEXT
    var text_4235_2037 = figma.createText();
    frame_4232_1294.appendChild(text_4235_2037);
    text_4235_2037.resize(80.0, 24.0);
    text_4235_2037.name = "Get started";
    text_4235_2037.fills = [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: { r: 1, g: 1, b: 1 },
        boundVariables: {},
      },
    ];
    text_4235_2037.relativeTransform = [
      [1, 0, 165],
      [0, 1, 447],
    ];
    text_4235_2037.x = 165;
    text_4235_2037.y = 447;

    // Font properties
    text_4235_2037.fontName = {
      family: "Roboto",
      style: "Regular",
    };
    text_4235_2037.characters = "Get started";
    text_4235_2037.fontSize = 16;
    text_4235_2037.listSpacing = 0;
    text_4235_2037.lineHeight = { unit: "PERCENT", value: 150 };
    text_4235_2037.textAutoResize = "WIDTH_AND_HEIGHT";

    // Create TEXT
    var text_4235_2038 = figma.createText();
    frame_4232_1294.appendChild(text_4235_2038);
    text_4235_2038.resize(80.0, 24.0);
    text_4235_2038.name = "Get started";
    text_4235_2038.fills = [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: { r: 1, g: 1, b: 1 },
        boundVariables: {},
      },
    ];
    text_4235_2038.relativeTransform = [
      [1, 0, 616],
      [0, 1, 447],
    ];
    text_4235_2038.x = 616;
    text_4235_2038.y = 447;

    // Font properties
    text_4235_2038.fontName = {
      family: "Roboto",
      style: "Regular",
    };
    text_4235_2038.characters = "Get started";
    text_4235_2038.fontSize = 16;
    text_4235_2038.listSpacing = 0;
    text_4235_2038.lineHeight = { unit: "PERCENT", value: 150 };
    text_4235_2038.textAutoResize = "WIDTH_AND_HEIGHT";

    // Create TEXT
    var text_4235_2039 = figma.createText();
    frame_4232_1294.appendChild(text_4235_2039);
    text_4235_2039.resize(80.0, 24.0);
    text_4235_2039.name = "Get started";
    text_4235_2039.fills = [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: { r: 1, g: 1, b: 1 },
        boundVariables: {},
      },
    ];
    text_4235_2039.relativeTransform = [
      [1, 0, 1062],
      [0, 1, 447],
    ];
    text_4235_2039.x = 1062;
    text_4235_2039.y = 447;

    // Font properties
    text_4235_2039.fontName = {
      family: "Roboto",
      style: "Regular",
    };
    text_4235_2039.characters = "Get started";
    text_4235_2039.fontSize = 16;
    text_4235_2039.listSpacing = 0;
    text_4235_2039.lineHeight = { unit: "PERCENT", value: 150 };
    text_4235_2039.textAutoResize = "WIDTH_AND_HEIGHT";
  }

  // STOP HERE AND DELETE MAIN() ###############################################################
  figma.closePlugin();
};
