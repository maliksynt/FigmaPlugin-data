const createNavbar = async () => {
  async function loadFonts() {
    await Promise.all([
      figma.loadFontAsync({
        family: "Roboto",
        style: "Regular",
      }),
    ]);
  }

  await loadFonts();

  // Create STYLE
  var white_668b = figma.createPaintStyle();
  white_668b.name = "White";
  white_668b.paints = [
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
  var black_0056 = figma.createPaintStyle();
  black_0056.name = "Black";
  black_0056.paints = [
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
  var white_668b = figma.createPaintStyle();
  white_668b.name = "White";
  white_668b.paints = [
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
  var frame_7_289 = figma.createFrame();
  figma.currentPage.appendChild(frame_7_289);
  frame_7_289.resize(1440.0, 72.0);
  frame_7_289.fillStyleId = white_668b.id;
  frame_7_289.backgroundStyleId = white_668b.id;
  frame_7_289.name = "Navbar / 1 /";
  frame_7_289.effects = [
    {
      type: "INNER_SHADOW",
      color: { r: 0, g: 0, b: 0, a: 1 },
      offset: { x: 0, y: -1 },
      radius: 0,
      spread: 0,
      visible: true,
      blendMode: "NORMAL",
    },
  ];
  frame_7_289.relativeTransform = [
    [1, 0, -928],
    [0, 1, -2854],
  ];
  frame_7_289.x = -928;
  frame_7_289.y = -2854;
  frame_7_289.paddingLeft = 64;
  frame_7_289.paddingRight = 64;
  frame_7_289.primaryAxisAlignItems = "CENTER";
  frame_7_289.counterAxisAlignItems = "CENTER";
  frame_7_289.primaryAxisSizingMode = "FIXED";
  frame_7_289.strokeTopWeight = 1;
  frame_7_289.strokeBottomWeight = 1;
  frame_7_289.strokeLeftWeight = 1;
  frame_7_289.strokeRightWeight = 1;
  frame_7_289.layoutMode = "VERTICAL";

  // Create FRAME
  var frame_7_290 = figma.createFrame();
  frame_7_289.appendChild(frame_7_290);
  frame_7_290.resize(1312.0, 27.0);
  frame_7_290.counterAxisSizingMode = "AUTO";
  frame_7_290.name = "Container";
  frame_7_290.relativeTransform = [
    [1, 0, 64],
    [0, 1, 22.5],
  ];
  frame_7_290.x = 64;
  frame_7_290.y = 22.5;
  frame_7_290.layoutAlign = "STRETCH";
  frame_7_290.fills = [];
  frame_7_290.primaryAxisAlignItems = "SPACE_BETWEEN";
  frame_7_290.counterAxisAlignItems = "CENTER";
  frame_7_290.primaryAxisSizingMode = "FIXED";
  frame_7_290.strokeTopWeight = 1;
  frame_7_290.strokeBottomWeight = 1;
  frame_7_290.strokeLeftWeight = 1;
  frame_7_290.strokeRightWeight = 1;
  frame_7_290.clipsContent = false;
  frame_7_290.expanded = false;
  frame_7_290.layoutMode = "HORIZONTAL";
  frame_7_290.counterAxisSizingMode = "AUTO";
  frame_7_290.itemSpacing = 32;

  // Create FRAME
  var frame_7_291 = figma.createFrame();
  frame_7_290.appendChild(frame_7_291);
  frame_7_291.resize(63.0, 27.0);
  frame_7_291.primaryAxisSizingMode = "AUTO";
  frame_7_291.counterAxisSizingMode = "AUTO";
  frame_7_291.name = "Column";
  frame_7_291.fills = [];
  frame_7_291.strokeTopWeight = 1;
  frame_7_291.strokeBottomWeight = 1;
  frame_7_291.strokeLeftWeight = 1;
  frame_7_291.strokeRightWeight = 1;
  frame_7_291.clipsContent = false;
  frame_7_291.layoutMode = "HORIZONTAL";
  frame_7_291.counterAxisSizingMode = "AUTO";

  // Create FRAME
  var frame_7_292 = figma.createFrame();
  frame_7_291.appendChild(frame_7_292);
  frame_7_292.resize(63.0, 27.0);
  frame_7_292.primaryAxisSizingMode = "AUTO";
  frame_7_292.name = "logo";
  frame_7_292.fills = [
    {
      type: "SOLID",
      visible: false,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 1, g: 1, b: 1 },
      boundVariables: {},
    },
  ];
  frame_7_292.strokeTopWeight = 1;
  frame_7_292.strokeBottomWeight = 1;
  frame_7_292.strokeLeftWeight = 1;
  frame_7_292.strokeRightWeight = 1;

  // Create TEXT
  var text_8_277 = figma.createText();
  frame_7_292.appendChild(text_8_277);
  text_8_277.resize(48.0, 26.0);
  text_8_277.name = "LOGO";
  text_8_277.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 0, g: 0, b: 0 },
      boundVariables: {},
    },
  ];
  text_8_277.relativeTransform = [
    [1, 0, 5],
    [0, 1, 0.5],
  ];
  text_8_277.x = 5;
  text_8_277.y = 0.5;

  // Font properties
  text_8_277.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_8_277.characters = "LOGO";
  text_8_277.listSpacing = 0;
  text_8_277.textAutoResize = "NONE";

  // Create FRAME
  var frame_7_297 = figma.createFrame();
  frame_7_290.appendChild(frame_7_297);
  frame_7_297.resize(390.0, 24.0);
  frame_7_297.primaryAxisSizingMode = "AUTO";
  frame_7_297.counterAxisSizingMode = "AUTO";
  frame_7_297.fillStyleId = white_668b.id;
  frame_7_297.backgroundStyleId = white_668b.id;
  frame_7_297.name = "Column";
  frame_7_297.relativeTransform = [
    [1, 0, 922],
    [0, 1, 1.5],
  ];
  frame_7_297.x = 922;
  frame_7_297.y = 1.5;
  frame_7_297.primaryAxisAlignItems = "CENTER";
  frame_7_297.counterAxisAlignItems = "CENTER";
  frame_7_297.strokeTopWeight = 1;
  frame_7_297.strokeBottomWeight = 1;
  frame_7_297.strokeLeftWeight = 1;
  frame_7_297.strokeRightWeight = 1;
  frame_7_297.clipsContent = false;
  frame_7_297.expanded = false;
  frame_7_297.layoutMode = "HORIZONTAL";
  frame_7_297.counterAxisSizingMode = "AUTO";
  frame_7_297.itemSpacing = 32;

  // Create FRAME
  var frame_7_298 = figma.createFrame();
  frame_7_297.appendChild(frame_7_298);
  frame_7_298.resize(390.0, 24.0);
  frame_7_298.primaryAxisSizingMode = "AUTO";
  frame_7_298.counterAxisSizingMode = "AUTO";
  frame_7_298.name = "Column";
  frame_7_298.fills = [];
  frame_7_298.strokeTopWeight = 1;
  frame_7_298.strokeBottomWeight = 1;
  frame_7_298.strokeLeftWeight = 1;
  frame_7_298.strokeRightWeight = 1;
  frame_7_298.expanded = false;
  frame_7_298.layoutMode = "HORIZONTAL";
  frame_7_298.counterAxisSizingMode = "AUTO";
  frame_7_298.itemSpacing = 32;

  // Create TEXT
  var text_7_299 = figma.createText();
  frame_7_298.appendChild(text_7_299);
  text_7_299.fillStyleId = black_0056.id;
  text_7_299.resize(62.0, 24.0);
  text_7_299.name = "Link One";

  // Font properties
  text_7_299.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_7_299.characters = "Link One";
  text_7_299.listSpacing = 0;
  text_7_299.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create TEXT
  var text_7_300 = figma.createText();
  frame_7_298.appendChild(text_7_300);
  text_7_300.fillStyleId = black_0056.id;
  text_7_300.resize(64.0, 24.0);
  text_7_300.name = "Link Two";
  text_7_300.relativeTransform = [
    [1, 0, 94],
    [0, 1, 0],
  ];
  text_7_300.x = 94;

  // Font properties
  text_7_300.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_7_300.characters = "Link Two";
  text_7_300.listSpacing = 0;
  text_7_300.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create TEXT
  var text_7_301 = figma.createText();
  frame_7_298.appendChild(text_7_301);
  text_7_301.fillStyleId = black_0056.id;
  text_7_301.resize(74.0, 24.0);
  text_7_301.name = "Link Three";
  text_7_301.relativeTransform = [
    [1, 0, 190],
    [0, 1, 0],
  ];
  text_7_301.x = 190;

  // Font properties
  text_7_301.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_7_301.characters = "Link Three";
  text_7_301.listSpacing = 0;
  text_7_301.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create FRAME
  var frame_7_302 = figma.createFrame();
  frame_7_298.appendChild(frame_7_302);
  frame_7_302.resize(94.0, 24.0);
  frame_7_302.primaryAxisSizingMode = "AUTO";
  frame_7_302.counterAxisSizingMode = "AUTO";
  frame_7_302.name = "Nav Link Dropdown";
  frame_7_302.relativeTransform = [
    [1, 0, 296],
    [0, 1, 0],
  ];
  frame_7_302.x = 296;
  frame_7_302.fills = [];
  frame_7_302.primaryAxisAlignItems = "CENTER";
  frame_7_302.counterAxisAlignItems = "CENTER";
  frame_7_302.strokeTopWeight = 1;
  frame_7_302.strokeBottomWeight = 1;
  frame_7_302.strokeLeftWeight = 1;
  frame_7_302.strokeRightWeight = 1;
  frame_7_302.clipsContent = false;
  frame_7_302.expanded = false;
  frame_7_302.layoutMode = "HORIZONTAL";
  frame_7_302.counterAxisSizingMode = "AUTO";
  frame_7_302.itemSpacing = 4;

  // Create TEXT
  var text_7_303 = figma.createText();
  frame_7_302.appendChild(text_7_303);
  text_7_303.fillStyleId = black_0056.id;
  text_7_303.resize(66.0, 24.0);
  text_7_303.name = "Link Four";

  // Font properties
  text_7_303.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_7_303.characters = "Link Four";
  text_7_303.listSpacing = 0;
  text_7_303.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create FRAME
  var frame_7_304 = figma.createFrame();
  frame_7_302.appendChild(frame_7_304);
  frame_7_304.resize(24.0, 24.0);
  frame_7_304.primaryAxisSizingMode = "AUTO";
  frame_7_304.name = "Chevron Down";
  frame_7_304.relativeTransform = [
    [1, 0, 70],
    [0, 1, 0],
  ];
  frame_7_304.x = 70;
  frame_7_304.fills = [
    {
      type: "SOLID",
      visible: false,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 1, g: 1, b: 1 },
      boundVariables: {},
    },
  ];
  frame_7_304.strokeWeight = 0.75;
  frame_7_304.strokeTopWeight = 0.75;
  frame_7_304.strokeBottomWeight = 0.75;
  frame_7_304.strokeLeftWeight = 0.75;
  frame_7_304.strokeRightWeight = 0.75;
  frame_7_304.expanded = false;

  // Create VECTOR
  var vector_7_305 = figma.createVector();
  frame_7_304.appendChild(vector_7_305);
  vector_7_305.fillStyleId = black_0056.id;
  vector_7_305.resize(12.5946922302, 7.1250371933);
  vector_7_305.strokes = [];
  vector_7_305.strokeWeight = 0.75;
  vector_7_305.strokeAlign = "INSIDE";
  vector_7_305.relativeTransform = [
    [1, 0, 5.7026367188],
    [0, 1, 8.7026367188],
  ];
  vector_7_305.x = 5.70263671875;
  vector_7_305.y = 8.70263671875;
  vector_7_305.constraints = { horizontal: "SCALE", vertical: "SCALE" };
  vector_7_305.vectorNetwork = {
    regions: [
      {
        windingRule: "EVENODD",
        loops: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
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
        fillStyleId: "S:944dd096111c054aa3fe5b06e93e15b039e10056,3284:1",
      },
    ],
    segments: [
      {
        start: 0,
        end: 1,
        tangentStart: { x: -0.2196749970316887, y: 0.2196749970316887 },
        tangentEnd: { x: 0.2196749970316887, y: 0.2196749970316887 },
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
        tangentStart: { x: -0.21966750919818878, y: -0.2196749970316887 },
        tangentEnd: { x: -0.21966750919818878, y: 0.2196749970316887 },
      },
      {
        start: 3,
        end: 4,
        tangentStart: { x: 0, y: 0 },
        tangentEnd: { x: 0, y: 0 },
      },
      {
        start: 4,
        end: 5,
        tangentStart: { x: 0.21966750919818878, y: -0.2196749970316887 },
        tangentEnd: { x: -0.2196749970316887, y: -0.2196749970316887 },
      },
      {
        start: 5,
        end: 6,
        tangentStart: { x: 0, y: 0 },
        tangentEnd: { x: 0, y: 0 },
      },
      {
        start: 6,
        end: 7,
        tangentStart: { x: 0, y: 0 },
        tangentEnd: { x: 0, y: 0 },
      },
      {
        start: 7,
        end: 8,
        tangentStart: { x: 0.2196749970316887, y: -0.2196749970316887 },
        tangentEnd: { x: -0.2196749970316887, y: -0.2196749970316887 },
      },
      {
        start: 8,
        end: 9,
        tangentStart: { x: 0, y: 0 },
        tangentEnd: { x: 0, y: 0 },
      },
      {
        start: 9,
        end: 10,
        tangentStart: { x: 0.2196749970316887, y: 0.2196749970316887 },
        tangentEnd: { x: 0.2196749970316887, y: -0.2196749970316887 },
      },
      {
        start: 10,
        end: 0,
        tangentStart: { x: 0, y: 0 },
        tangentEnd: { x: 0, y: 0 },
      },
    ],
    vertices: [
      {
        x: 6.695061206817627,
        y: 6.960280895233154,
        strokeCap: "NONE",
        strokeJoin: "MITER",
        cornerRadius: 0,
        handleMirroring: "NONE",
      },
      {
        x: 5.899610638618469,
        y: 6.960280895233154,
        strokeCap: "NONE",
        strokeJoin: "MITER",
        cornerRadius: 0,
        handleMirroring: "NONE",
      },
      {
        x: 0.1647506318986416,
        y: 1.2254060804843903,
        strokeCap: "NONE",
        strokeJoin: "MITER",
        cornerRadius: 0,
        handleMirroring: "NONE",
      },
      {
        x: 0.1647506318986416,
        y: 0.4299559146165848,
        strokeCap: "NONE",
        strokeJoin: "MITER",
        cornerRadius: 0,
        handleMirroring: "NONE",
      },
      {
        x: 0.42992059886455536,
        y: 0.16475625336170197,
        strokeCap: "NONE",
        strokeJoin: "MITER",
        cornerRadius: 0,
        handleMirroring: "NONE",
      },
      {
        x: 1.2254159152507782,
        y: 0.16475625336170197,
        strokeCap: "NONE",
        strokeJoin: "MITER",
        cornerRadius: 0,
        handleMirroring: "NONE",
      },
      {
        x: 6.297336101531982,
        y: 5.236706256866455,
        strokeCap: "NONE",
        strokeJoin: "MITER",
        cornerRadius: 0,
        handleMirroring: "NONE",
      },
      {
        x: 11.369286060333252,
        y: 0.16475625336170197,
        strokeCap: "NONE",
        strokeJoin: "MITER",
        cornerRadius: 0,
        handleMirroring: "NONE",
      },
      {
        x: 12.164736270904541,
        y: 0.16475625336170197,
        strokeCap: "NONE",
        strokeJoin: "MITER",
        cornerRadius: 0,
        handleMirroring: "NONE",
      },
      {
        x: 12.429935932159424,
        y: 0.4299559146165848,
        strokeCap: "NONE",
        strokeJoin: "MITER",
        cornerRadius: 0,
        handleMirroring: "NONE",
      },
      {
        x: 12.429935932159424,
        y: 1.2254060804843903,
        strokeCap: "NONE",
        strokeJoin: "MITER",
        cornerRadius: 0,
        handleMirroring: "NONE",
      },
    ],
  };
  vector_7_305.vectorPaths = [
    {
      windingRule: "EVENODD",
      data: "M 6.695061206817627 6.960280895233154 C 6.475386209785938 7.179955892264843 6.119285635650158 7.179955892264843 5.899610638618469 6.960280895233154 L 0.1647506318986416 1.2254060804843903 C -0.054916877299547195 1.0057310834527016 -0.054916877299547195 0.6496309116482735 0.1647506318986416 0.4299559146165848 L 0.42992059886455536 0.16475625336170197 C 0.6495881080627441 -0.054918743669986725 1.0057409182190895 -0.054918743669986725 1.2254159152507782 0.16475625336170197 L 6.297336101531982 5.236706256866455 L 11.369286060333252 0.16475625336170197 C 11.58896105736494 -0.054918743669986725 11.945061273872852 -0.054918743669986725 12.164736270904541 0.16475625336170197 L 12.429935932159424 0.4299559146165848 C 12.649610929191113 0.6496309116482735 12.649610929191113 1.0057310834527016 12.429935932159424 1.2254060804843903 L 6.695061206817627 6.960280895233154 Z",
    },
  ];

  // Create FRAME
  var frame_7_306 = figma.createFrame();
  frame_7_297.appendChild(frame_7_306);
  frame_7_306.resize(220.0, 40.0);
  frame_7_306.primaryAxisSizingMode = "AUTO";
  frame_7_306.counterAxisSizingMode = "AUTO";
  frame_7_306.name = "Column";
  frame_7_306.visible = false;
  frame_7_306.relativeTransform = [
    [1, 0, 422],
    [0, 1, 0],
  ];
  frame_7_306.x = 422;
  frame_7_306.fills = [];
  frame_7_306.primaryAxisAlignItems = "CENTER";
  frame_7_306.counterAxisAlignItems = "CENTER";
  frame_7_306.strokeTopWeight = 1;
  frame_7_306.strokeBottomWeight = 1;
  frame_7_306.strokeLeftWeight = 1;
  frame_7_306.strokeRightWeight = 1;
  frame_7_306.clipsContent = false;
  frame_7_306.expanded = false;
  frame_7_306.layoutMode = "HORIZONTAL";
  frame_7_306.counterAxisSizingMode = "AUTO";
  frame_7_306.itemSpacing = 16;
};

const createBlogCards = async () => {
  // Load FONTS
  async function loadFonts() {
    await Promise.all([
      figma.loadFontAsync({
        family: "Roboto",
        style: "Bold",
      }),
      figma.loadFontAsync({
        family: "Roboto",
        style: "Regular",
      }),
      figma.loadFontAsync({
        family: "Roboto",
        style: "SemiBold",
      }),
    ]);
  }

  await loadFonts();

  // Create STYLE
  var white_668b = figma.createPaintStyle();
  white_668b.name = "White";
  white_668b.paints = [
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
  var black_0056 = figma.createPaintStyle();
  black_0056.name = "Black";
  black_0056.paints = [
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
  var white_668b = figma.createPaintStyle();
  white_668b.name = "White";
  white_668b.paints = [
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
  var black_0056 = figma.createPaintStyle();
  black_0056.name = "Black";
  black_0056.paints = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 0, g: 0, b: 0 },
      boundVariables: {},
    },
  ];

  // Create FRAME
  var frame_38_1196 = figma.createFrame();
  figma.currentPage.appendChild(frame_38_1196);
  frame_38_1196.resize(1440.0, 1070.0);
  frame_38_1196.primaryAxisSizingMode = "AUTO";
  frame_38_1196.fillStyleId = white_668b.id;
  frame_38_1196.backgroundStyleId = white_668b.id;
  frame_38_1196.name = "Blog / 35 /";
  frame_38_1196.relativeTransform = [
    [1, 0, 7512],
    [0, 1, 435],
  ];
  frame_38_1196.x = 7512;
  frame_38_1196.y = 435;
  frame_38_1196.paddingLeft = 64;
  frame_38_1196.paddingRight = 64;
  frame_38_1196.paddingTop = 112;
  frame_38_1196.paddingBottom = 112;
  frame_38_1196.primaryAxisAlignItems = "CENTER";
  frame_38_1196.counterAxisAlignItems = "CENTER";
  frame_38_1196.strokeTopWeight = 1;
  frame_38_1196.strokeBottomWeight = 1;
  frame_38_1196.strokeLeftWeight = 1;
  frame_38_1196.strokeRightWeight = 1;
  frame_38_1196.layoutMode = "VERTICAL";
  frame_38_1196.itemSpacing = 80;

  // Create FRAME
  var frame_38_1197 = figma.createFrame();
  frame_38_1196.appendChild(frame_38_1197);
  frame_38_1197.resize(768.0, 109.0);
  frame_38_1197.primaryAxisSizingMode = "AUTO";
  frame_38_1197.name = "Section Title";
  frame_38_1197.relativeTransform = [
    [1, 0, 336],
    [0, 1, 112],
  ];
  frame_38_1197.x = 336;
  frame_38_1197.y = 112;
  frame_38_1197.fills = [];
  frame_38_1197.counterAxisAlignItems = "CENTER";
  frame_38_1197.strokeTopWeight = 1;
  frame_38_1197.strokeBottomWeight = 1;
  frame_38_1197.strokeLeftWeight = 1;
  frame_38_1197.strokeRightWeight = 1;
  frame_38_1197.clipsContent = false;
  frame_38_1197.expanded = false;
  frame_38_1197.layoutMode = "VERTICAL";
  frame_38_1197.itemSpacing = 24;

  // Create TEXT
  var text_38_1198 = figma.createText();
  frame_38_1197.appendChild(text_38_1198);
  text_38_1198.fillStyleId = black_0056.id;
  text_38_1198.resize(768.0, 58.0);
  text_38_1198.name = "Related posts";
  text_38_1198.layoutAlign = "STRETCH";

  // Font properties
  text_38_1198.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_38_1198.fontSize = 36;
  text_38_1198.characters = "Related posts";
  text_38_1198.listSpacing = 0;
  text_38_1198.textAutoResize = "HEIGHT";

  // Create TEXT
  var text_38_1199 = figma.createText();
  frame_38_1197.appendChild(text_38_1199);
  text_38_1199.fillStyleId = black_0056.id;
  text_38_1199.resize(768.0, 27.0);
  text_38_1199.name =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  text_38_1199.relativeTransform = [
    [1, 0, 0],
    [0, 1, 82],
  ];
  text_38_1199.y = 82;
  text_38_1199.layoutAlign = "STRETCH";

  // Font properties
  text_38_1199.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_38_1199.characters =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ";
  text_38_1199.listSpacing = 0;
  text_38_1199.textAutoResize = "HEIGHT";

  // Create FRAME
  var frame_38_1200 = figma.createFrame();
  frame_38_1196.appendChild(frame_38_1200);
  frame_38_1200.resize(1312.0, 657.0);
  frame_38_1200.primaryAxisSizingMode = "AUTO";
  frame_38_1200.counterAxisSizingMode = "AUTO";
  frame_38_1200.name = "Content";
  frame_38_1200.relativeTransform = [
    [1, 0, 64],
    [0, 1, 301],
  ];
  frame_38_1200.x = 64;
  frame_38_1200.y = 301;
  frame_38_1200.fills = [];
  frame_38_1200.counterAxisAlignItems = "CENTER";
  frame_38_1200.strokeTopWeight = 1;
  frame_38_1200.strokeBottomWeight = 1;
  frame_38_1200.strokeLeftWeight = 1;
  frame_38_1200.strokeRightWeight = 1;
  frame_38_1200.clipsContent = false;
  frame_38_1200.layoutMode = "VERTICAL";
  frame_38_1200.counterAxisSizingMode = "AUTO";
  frame_38_1200.itemSpacing = 64;

  // Create FRAME
  var frame_38_1201 = figma.createFrame();
  frame_38_1200.appendChild(frame_38_1201);
  frame_38_1201.resize(1312.0, 545.0);
  frame_38_1201.counterAxisSizingMode = "AUTO";
  frame_38_1201.name = "Row";
  frame_38_1201.fills = [];
  frame_38_1201.primaryAxisSizingMode = "FIXED";
  frame_38_1201.strokeTopWeight = 1;
  frame_38_1201.strokeBottomWeight = 1;
  frame_38_1201.strokeLeftWeight = 1;
  frame_38_1201.strokeRightWeight = 1;
  frame_38_1201.clipsContent = false;
  frame_38_1201.layoutMode = "HORIZONTAL";
  frame_38_1201.counterAxisSizingMode = "AUTO";
  frame_38_1201.itemSpacing = 32;

  // Create FRAME
  var frame_38_1202 = figma.createFrame();
  frame_38_1201.appendChild(frame_38_1202);
  frame_38_1202.resize(416.0, 545.0);
  frame_38_1202.primaryAxisSizingMode = "AUTO";
  frame_38_1202.strokeStyleId = black_0056.id;
  frame_38_1202.name = "Card";
  frame_38_1202.layoutGrow = 1;
  frame_38_1202.fills = [];
  frame_38_1202.strokeAlign = "OUTSIDE";
  frame_38_1202.strokeTopWeight = 1;
  frame_38_1202.strokeBottomWeight = 1;
  frame_38_1202.strokeLeftWeight = 1;
  frame_38_1202.strokeRightWeight = 1;
  frame_38_1202.clipsContent = false;
  frame_38_1202.expanded = false;
  frame_38_1202.layoutMode = "VERTICAL";

  // Create FRAME
  var frame_38_1252 = figma.createFrame();
  frame_38_1202.appendChild(frame_38_1252);
  frame_38_1252.resize(416.0, 295.0);
  frame_38_1252.name = "Header / 1 /";
  frame_38_1252.exportSettings = [
    {
      format: "PNG",
      suffix: "",
      contentsOnly: true,
      colorProfile: "DOCUMENT",
      constraint: { type: "SCALE", value: 1 },
    },
  ];
  frame_38_1252.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        r: 0.8588235378265381,
        g: 0.8588235378265381,
        b: 0.8588235378265381,
      },
      boundVariables: {},
    },
  ];
  frame_38_1252.paddingLeft = 64;
  frame_38_1252.paddingRight = 64;
  frame_38_1252.paddingTop = 112;
  frame_38_1252.paddingBottom = 112;
  frame_38_1252.primaryAxisAlignItems = "CENTER";
  frame_38_1252.counterAxisAlignItems = "CENTER";
  frame_38_1252.primaryAxisSizingMode = "FIXED";
  frame_38_1252.strokeTopWeight = 1;
  frame_38_1252.strokeBottomWeight = 1;
  frame_38_1252.strokeLeftWeight = 1;
  frame_38_1252.strokeRightWeight = 1;
  frame_38_1252.expanded = false;
  frame_38_1252.layoutMode = "HORIZONTAL";
  frame_38_1252.itemSpacing = 80;

  // Create TEXT
  var text_38_1253 = figma.createText();
  frame_38_1252.appendChild(text_38_1253);
  text_38_1253.resize(337.0, 60.0);
  text_38_1253.name = "Image Placeholder";
  text_38_1253.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 0, g: 0, b: 0 },
      boundVariables: {},
    },
  ];
  text_38_1253.relativeTransform = [
    [1, 0, 39.5],
    [0, 1, 117.5],
  ];
  text_38_1253.x = 39.5;
  text_38_1253.y = 117.5;

  // Font properties
  text_38_1253.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_38_1253.characters = "Image Placeholder ";
  text_38_1253.fontSize = 40;
  text_38_1253.listSpacing = 0;
  text_38_1253.lineHeight = { unit: "PERCENT", value: 150 };
  text_38_1253.fontName = { family: "Roboto", style: "Bold" };
  text_38_1253.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create FRAME
  var frame_38_1204 = figma.createFrame();
  frame_38_1202.appendChild(frame_38_1204);
  frame_38_1204.resize(416.0, 250.0);
  frame_38_1204.primaryAxisSizingMode = "AUTO";
  frame_38_1204.name = "Content";
  frame_38_1204.relativeTransform = [
    [1, 0, 0],
    [0, 1, 295],
  ];
  frame_38_1204.y = 295;
  frame_38_1204.layoutAlign = "STRETCH";
  frame_38_1204.fills = [];
  frame_38_1204.paddingLeft = 24;
  frame_38_1204.paddingRight = 24;
  frame_38_1204.paddingTop = 24;
  frame_38_1204.paddingBottom = 24;
  frame_38_1204.strokeTopWeight = 1;
  frame_38_1204.strokeBottomWeight = 1;
  frame_38_1204.strokeLeftWeight = 1;
  frame_38_1204.strokeRightWeight = 1;
  frame_38_1204.clipsContent = false;
  frame_38_1204.layoutMode = "VERTICAL";
  frame_38_1204.itemSpacing = 24;

  // Create FRAME
  var frame_38_1205 = figma.createFrame();
  frame_38_1204.appendChild(frame_38_1205);
  frame_38_1205.resize(368.0, 119.0);
  frame_38_1205.primaryAxisSizingMode = "AUTO";
  frame_38_1205.name = "Content";
  frame_38_1205.relativeTransform = [
    [1, 0, 24],
    [0, 1, 24],
  ];
  frame_38_1205.x = 24;
  frame_38_1205.y = 24;
  frame_38_1205.layoutAlign = "STRETCH";
  frame_38_1205.fills = [];
  frame_38_1205.strokeTopWeight = 1;
  frame_38_1205.strokeBottomWeight = 1;
  frame_38_1205.strokeLeftWeight = 1;
  frame_38_1205.strokeRightWeight = 1;
  frame_38_1205.clipsContent = false;
  frame_38_1205.expanded = false;
  frame_38_1205.layoutMode = "VERTICAL";
  frame_38_1205.itemSpacing = 8;

  // Create TEXT
  var text_38_1206 = figma.createText();
  frame_38_1205.appendChild(text_38_1206);
  text_38_1206.fillStyleId = black_0056.id;
  text_38_1206.resize(368.0, 21.0);
  text_38_1206.name = "Category";
  text_38_1206.layoutAlign = "STRETCH";

  // Font properties
  text_38_1206.fontName = {
    family: "Roboto",
    style: "SemiBold",
  };
  text_38_1206.characters = "Category";
  text_38_1206.listSpacing = 0;
  text_38_1206.textAutoResize = "HEIGHT";

  // Create FRAME
  var frame_38_1207 = figma.createFrame();
  frame_38_1205.appendChild(frame_38_1207);
  frame_38_1207.resize(368.0, 90.0);
  frame_38_1207.primaryAxisSizingMode = "AUTO";
  frame_38_1207.name = "Title";
  frame_38_1207.relativeTransform = [
    [1, 0, 0],
    [0, 1, 29],
  ];
  frame_38_1207.y = 29;
  frame_38_1207.fills = [];
  frame_38_1207.strokeTopWeight = 1;
  frame_38_1207.strokeBottomWeight = 1;
  frame_38_1207.strokeLeftWeight = 1;
  frame_38_1207.strokeRightWeight = 1;
  frame_38_1207.clipsContent = false;
  frame_38_1207.expanded = false;
  frame_38_1207.layoutMode = "VERTICAL";
  frame_38_1207.itemSpacing = 8;

  // Create TEXT
  var text_38_1208 = figma.createText();
  frame_38_1207.appendChild(text_38_1208);
  text_38_1208.fillStyleId = black_0056.id;
  text_38_1208.resize(368.0, 34.0);
  text_38_1208.name = "Blog title heading will go here";
  text_38_1208.layoutAlign = "STRETCH";

  // Font properties
  text_38_1208.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_38_1208.characters = "Blog title heading will go here";
  text_38_1208.listSpacing = 0;
  text_38_1208.textAutoResize = "HEIGHT";

  // Create TEXT
  var text_38_1209 = figma.createText();
  frame_38_1207.appendChild(text_38_1209);
  text_38_1209.fillStyleId = black_0056.id;
  text_38_1209.resize(368.0, 48.0);
  text_38_1209.name =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.";
  text_38_1209.relativeTransform = [
    [1, 0, 0],
    [0, 1, 42],
  ];
  text_38_1209.y = 42;
  text_38_1209.layoutAlign = "STRETCH";

  // Font properties
  text_38_1209.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_38_1209.characters =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.";
  text_38_1209.listSpacing = 0;
  text_38_1209.textAutoResize = "HEIGHT";

  // Create FRAME
  var frame_38_1210 = figma.createFrame();
  frame_38_1204.appendChild(frame_38_1210);
  frame_38_1210.resize(368.0, 59.0);
  frame_38_1210.counterAxisSizingMode = "AUTO";
  frame_38_1210.name = "Avatar";
  frame_38_1210.relativeTransform = [
    [1, 0, 24],
    [0, 1, 167],
  ];
  frame_38_1210.x = 24;
  frame_38_1210.y = 167;
  frame_38_1210.layoutAlign = "STRETCH";
  frame_38_1210.fills = [];
  frame_38_1210.counterAxisAlignItems = "CENTER";
  frame_38_1210.primaryAxisSizingMode = "FIXED";
  frame_38_1210.strokeTopWeight = 1;
  frame_38_1210.strokeBottomWeight = 1;
  frame_38_1210.strokeLeftWeight = 1;
  frame_38_1210.strokeRightWeight = 1;
  frame_38_1210.clipsContent = false;
  frame_38_1210.layoutMode = "HORIZONTAL";
  frame_38_1210.counterAxisSizingMode = "AUTO";
  frame_38_1210.itemSpacing = 16;

  // Create ELLIPSE
  var ellipse_38_1260 = figma.createEllipse();
  frame_38_1210.appendChild(ellipse_38_1260);
  ellipse_38_1260.resize(58.0, 59.0);
  ellipse_38_1260.name = "Ellipse 2";
  ellipse_38_1260.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        r: 0.8509804010391235,
        g: 0.8509804010391235,
        b: 0.8509804010391235,
      },
      boundVariables: {},
    },
  ];
  ellipse_38_1260.constrainProportions = true;

  // Create FRAME
  var frame_38_1212 = figma.createFrame();
  frame_38_1210.appendChild(frame_38_1212);
  frame_38_1212.resize(294.0, 48.0);
  frame_38_1212.primaryAxisSizingMode = "AUTO";
  frame_38_1212.name = "Content";
  frame_38_1212.relativeTransform = [
    [1, 0, 74],
    [0, 1, 5.5],
  ];
  frame_38_1212.x = 74;
  frame_38_1212.y = 5.5;
  frame_38_1212.layoutGrow = 1;
  frame_38_1212.fills = [];
  frame_38_1212.strokeTopWeight = 1;
  frame_38_1212.strokeBottomWeight = 1;
  frame_38_1212.strokeLeftWeight = 1;
  frame_38_1212.strokeRightWeight = 1;
  frame_38_1212.clipsContent = false;
  frame_38_1212.expanded = false;
  frame_38_1212.layoutMode = "VERTICAL";

  // Create TEXT
  var text_38_1213 = figma.createText();
  frame_38_1212.appendChild(text_38_1213);
  text_38_1213.fillStyleId = black_0056.id;
  text_38_1213.resize(294.0, 21.0);
  text_38_1213.name = "Full name";
  text_38_1213.layoutAlign = "STRETCH";

  // Font properties
  text_38_1213.fontName = {
    family: "Roboto",
    style: "SemiBold",
  };
  text_38_1213.characters = "Full name";
  text_38_1213.listSpacing = 0;
  text_38_1213.textAutoResize = "HEIGHT";

  // Create FRAME
  var frame_38_1214 = figma.createFrame();
  frame_38_1212.appendChild(frame_38_1214);
  frame_38_1214.resize(294.0, 27.0);
  frame_38_1214.counterAxisSizingMode = "AUTO";
  frame_38_1214.name = "Time";
  frame_38_1214.relativeTransform = [
    [1, 0, 0],
    [0, 1, 21],
  ];
  frame_38_1214.y = 21;
  frame_38_1214.layoutAlign = "STRETCH";
  frame_38_1214.fills = [];
  frame_38_1214.counterAxisAlignItems = "CENTER";
  frame_38_1214.primaryAxisSizingMode = "FIXED";
  frame_38_1214.strokeTopWeight = 1;
  frame_38_1214.strokeBottomWeight = 1;
  frame_38_1214.strokeLeftWeight = 1;
  frame_38_1214.strokeRightWeight = 1;
  frame_38_1214.clipsContent = false;
  frame_38_1214.expanded = false;
  frame_38_1214.layoutMode = "HORIZONTAL";
  frame_38_1214.counterAxisSizingMode = "AUTO";
  frame_38_1214.itemSpacing = 8;

  // Create TEXT
  var text_38_1215 = figma.createText();
  frame_38_1214.appendChild(text_38_1215);
  text_38_1215.fillStyleId = black_0056.id;
  text_38_1215.resize(78.0, 21.0);
  text_38_1215.name = "11 Jan 2022";
  text_38_1215.relativeTransform = [
    [1, 0, 0],
    [0, 1, 3],
  ];
  text_38_1215.y = 3;

  // Font properties
  text_38_1215.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_38_1215.characters = "11 Jan 2022";
  text_38_1215.listSpacing = 0;
  text_38_1215.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create TEXT
  var text_38_1216 = figma.createText();
  frame_38_1214.appendChild(text_38_1216);
  text_38_1216.fillStyleId = black_0056.id;
  text_38_1216.resize(7.0, 27.0);
  text_38_1216.name = "•";
  text_38_1216.relativeTransform = [
    [1, 0, 86],
    [0, 1, 0],
  ];
  text_38_1216.x = 86;

  // Font properties
  text_38_1216.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_38_1216.characters = "•";
  text_38_1216.listSpacing = 0;
  text_38_1216.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create TEXT
  var text_38_1217 = figma.createText();
  frame_38_1214.appendChild(text_38_1217);
  text_38_1217.fillStyleId = black_0056.id;
  text_38_1217.resize(66.0, 21.0);
  text_38_1217.name = "5 min read";
  text_38_1217.relativeTransform = [
    [1, 0, 101],
    [0, 1, 3],
  ];
  text_38_1217.x = 101;
  text_38_1217.y = 3;

  // Font properties
  text_38_1217.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_38_1217.characters = "5 min read";
  text_38_1217.listSpacing = 0;
  text_38_1217.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create FRAME
  var frame_38_1278 = figma.createFrame();
  frame_38_1201.appendChild(frame_38_1278);
  frame_38_1278.resize(416.0, 545.0);
  frame_38_1278.primaryAxisSizingMode = "AUTO";
  frame_38_1278.strokeStyleId = black_0056.id;
  frame_38_1278.name = "Card";
  frame_38_1278.relativeTransform = [
    [1, 0, 448],
    [0, 1, 0],
  ];
  frame_38_1278.x = 448;
  frame_38_1278.layoutGrow = 1;
  frame_38_1278.fills = [];
  frame_38_1278.strokeAlign = "OUTSIDE";
  frame_38_1278.strokeTopWeight = 1;
  frame_38_1278.strokeBottomWeight = 1;
  frame_38_1278.strokeLeftWeight = 1;
  frame_38_1278.strokeRightWeight = 1;
  frame_38_1278.clipsContent = false;
  frame_38_1278.expanded = false;
  frame_38_1278.layoutMode = "VERTICAL";

  // Create FRAME
  var frame_38_1279 = figma.createFrame();
  frame_38_1278.appendChild(frame_38_1279);
  frame_38_1279.resize(416.0, 295.0);
  frame_38_1279.name = "Header / 1 /";
  frame_38_1279.exportSettings = [
    {
      format: "PNG",
      suffix: "",
      contentsOnly: true,
      colorProfile: "DOCUMENT",
      constraint: { type: "SCALE", value: 1 },
    },
  ];
  frame_38_1279.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        r: 0.8588235378265381,
        g: 0.8588235378265381,
        b: 0.8588235378265381,
      },
      boundVariables: {},
    },
  ];
  frame_38_1279.paddingLeft = 64;
  frame_38_1279.paddingRight = 64;
  frame_38_1279.paddingTop = 112;
  frame_38_1279.paddingBottom = 112;
  frame_38_1279.primaryAxisAlignItems = "CENTER";
  frame_38_1279.counterAxisAlignItems = "CENTER";
  frame_38_1279.primaryAxisSizingMode = "FIXED";
  frame_38_1279.strokeTopWeight = 1;
  frame_38_1279.strokeBottomWeight = 1;
  frame_38_1279.strokeLeftWeight = 1;
  frame_38_1279.strokeRightWeight = 1;
  frame_38_1279.expanded = false;
  frame_38_1279.layoutMode = "HORIZONTAL";
  frame_38_1279.itemSpacing = 80;

  // Create TEXT
  var text_38_1280 = figma.createText();
  frame_38_1279.appendChild(text_38_1280);
  text_38_1280.resize(337.0, 60.0);
  text_38_1280.name = "Image Placeholder";
  text_38_1280.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 0, g: 0, b: 0 },
      boundVariables: {},
    },
  ];
  text_38_1280.relativeTransform = [
    [1, 0, 39.5],
    [0, 1, 117.5],
  ];
  text_38_1280.x = 39.5;
  text_38_1280.y = 117.5;

  // Font properties
  text_38_1280.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_38_1280.characters = "Image Placeholder ";
  text_38_1280.fontSize = 40;
  text_38_1280.listSpacing = 0;
  text_38_1280.lineHeight = { unit: "PERCENT", value: 150 };
  text_38_1280.fontName = { family: "Roboto", style: "Bold" };
  text_38_1280.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create FRAME
  var frame_38_1281 = figma.createFrame();
  frame_38_1278.appendChild(frame_38_1281);
  frame_38_1281.resize(416.0, 250.0);
  frame_38_1281.primaryAxisSizingMode = "AUTO";
  frame_38_1281.name = "Content";
  frame_38_1281.relativeTransform = [
    [1, 0, 0],
    [0, 1, 295],
  ];
  frame_38_1281.y = 295;
  frame_38_1281.layoutAlign = "STRETCH";
  frame_38_1281.fills = [];
  frame_38_1281.paddingLeft = 24;
  frame_38_1281.paddingRight = 24;
  frame_38_1281.paddingTop = 24;
  frame_38_1281.paddingBottom = 24;
  frame_38_1281.strokeTopWeight = 1;
  frame_38_1281.strokeBottomWeight = 1;
  frame_38_1281.strokeLeftWeight = 1;
  frame_38_1281.strokeRightWeight = 1;
  frame_38_1281.clipsContent = false;
  frame_38_1281.layoutMode = "VERTICAL";
  frame_38_1281.itemSpacing = 24;

  // Create FRAME
  var frame_38_1282 = figma.createFrame();
  frame_38_1281.appendChild(frame_38_1282);
  frame_38_1282.resize(368.0, 119.0);
  frame_38_1282.primaryAxisSizingMode = "AUTO";
  frame_38_1282.name = "Content";
  frame_38_1282.relativeTransform = [
    [1, 0, 24],
    [0, 1, 24],
  ];
  frame_38_1282.x = 24;
  frame_38_1282.y = 24;
  frame_38_1282.layoutAlign = "STRETCH";
  frame_38_1282.fills = [];
  frame_38_1282.strokeTopWeight = 1;
  frame_38_1282.strokeBottomWeight = 1;
  frame_38_1282.strokeLeftWeight = 1;
  frame_38_1282.strokeRightWeight = 1;
  frame_38_1282.clipsContent = false;
  frame_38_1282.expanded = false;
  frame_38_1282.layoutMode = "VERTICAL";
  frame_38_1282.itemSpacing = 8;

  // Create TEXT
  var text_38_1283 = figma.createText();
  frame_38_1282.appendChild(text_38_1283);
  text_38_1283.fillStyleId = black_0056.id;
  text_38_1283.resize(368.0, 21.0);
  text_38_1283.name = "Category";
  text_38_1283.layoutAlign = "STRETCH";

  // Font properties
  text_38_1283.fontName = {
    family: "Roboto",
    style: "SemiBold",
  };
  text_38_1283.characters = "Category";
  text_38_1283.listSpacing = 0;
  text_38_1283.textAutoResize = "HEIGHT";

  // Create FRAME
  var frame_38_1284 = figma.createFrame();
  frame_38_1282.appendChild(frame_38_1284);
  frame_38_1284.resize(368.0, 90.0);
  frame_38_1284.primaryAxisSizingMode = "AUTO";
  frame_38_1284.name = "Title";
  frame_38_1284.relativeTransform = [
    [1, 0, 0],
    [0, 1, 29],
  ];
  frame_38_1284.y = 29;
  frame_38_1284.fills = [];
  frame_38_1284.strokeTopWeight = 1;
  frame_38_1284.strokeBottomWeight = 1;
  frame_38_1284.strokeLeftWeight = 1;
  frame_38_1284.strokeRightWeight = 1;
  frame_38_1284.clipsContent = false;
  frame_38_1284.expanded = false;
  frame_38_1284.layoutMode = "VERTICAL";
  frame_38_1284.itemSpacing = 8;

  // Create TEXT
  var text_38_1285 = figma.createText();
  frame_38_1284.appendChild(text_38_1285);
  text_38_1285.fillStyleId = black_0056.id;
  text_38_1285.resize(368.0, 34.0);
  text_38_1285.name = "Blog title heading will go here";
  text_38_1285.layoutAlign = "STRETCH";

  // Font properties
  text_38_1285.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_38_1285.characters = "Blog title heading will go here";
  text_38_1285.listSpacing = 0;
  text_38_1285.textAutoResize = "HEIGHT";

  // Create TEXT
  var text_38_1286 = figma.createText();
  frame_38_1284.appendChild(text_38_1286);
  text_38_1286.fillStyleId = black_0056.id;
  text_38_1286.resize(368.0, 48.0);
  text_38_1286.name =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.";
  text_38_1286.relativeTransform = [
    [1, 0, 0],
    [0, 1, 42],
  ];
  text_38_1286.y = 42;
  text_38_1286.layoutAlign = "STRETCH";

  // Font properties
  text_38_1286.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_38_1286.characters =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.";
  text_38_1286.listSpacing = 0;
  text_38_1286.textAutoResize = "HEIGHT";

  // Create FRAME
  var frame_38_1287 = figma.createFrame();
  frame_38_1281.appendChild(frame_38_1287);
  frame_38_1287.resize(368.0, 59.0);
  frame_38_1287.counterAxisSizingMode = "AUTO";
  frame_38_1287.name = "Avatar";
  frame_38_1287.relativeTransform = [
    [1, 0, 24],
    [0, 1, 167],
  ];
  frame_38_1287.x = 24;
  frame_38_1287.y = 167;
  frame_38_1287.layoutAlign = "STRETCH";
  frame_38_1287.fills = [];
  frame_38_1287.counterAxisAlignItems = "CENTER";
  frame_38_1287.primaryAxisSizingMode = "FIXED";
  frame_38_1287.strokeTopWeight = 1;
  frame_38_1287.strokeBottomWeight = 1;
  frame_38_1287.strokeLeftWeight = 1;
  frame_38_1287.strokeRightWeight = 1;
  frame_38_1287.clipsContent = false;
  frame_38_1287.layoutMode = "HORIZONTAL";
  frame_38_1287.counterAxisSizingMode = "AUTO";
  frame_38_1287.itemSpacing = 16;

  // Create ELLIPSE
  var ellipse_38_1288 = figma.createEllipse();
  frame_38_1287.appendChild(ellipse_38_1288);
  ellipse_38_1288.resize(58.0, 59.0);
  ellipse_38_1288.name = "Ellipse 2";
  ellipse_38_1288.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        r: 0.8509804010391235,
        g: 0.8509804010391235,
        b: 0.8509804010391235,
      },
      boundVariables: {},
    },
  ];
  ellipse_38_1288.constrainProportions = true;

  // Create FRAME
  var frame_38_1289 = figma.createFrame();
  frame_38_1287.appendChild(frame_38_1289);
  frame_38_1289.resize(294.0, 48.0);
  frame_38_1289.primaryAxisSizingMode = "AUTO";
  frame_38_1289.name = "Content";
  frame_38_1289.relativeTransform = [
    [1, 0, 74],
    [0, 1, 5.5],
  ];
  frame_38_1289.x = 74;
  frame_38_1289.y = 5.5;
  frame_38_1289.layoutGrow = 1;
  frame_38_1289.fills = [];
  frame_38_1289.strokeTopWeight = 1;
  frame_38_1289.strokeBottomWeight = 1;
  frame_38_1289.strokeLeftWeight = 1;
  frame_38_1289.strokeRightWeight = 1;
  frame_38_1289.clipsContent = false;
  frame_38_1289.expanded = false;
  frame_38_1289.layoutMode = "VERTICAL";

  // Create TEXT
  var text_38_1290 = figma.createText();
  frame_38_1289.appendChild(text_38_1290);
  text_38_1290.fillStyleId = black_0056.id;
  text_38_1290.resize(294.0, 21.0);
  text_38_1290.name = "Full name";
  text_38_1290.layoutAlign = "STRETCH";

  // Font properties
  text_38_1290.fontName = {
    family: "Roboto",
    style: "SemiBold",
  };
  text_38_1290.characters = "Full name";
  text_38_1290.listSpacing = 0;
  text_38_1290.textAutoResize = "HEIGHT";

  // Create FRAME
  var frame_38_1291 = figma.createFrame();
  frame_38_1289.appendChild(frame_38_1291);
  frame_38_1291.resize(294.0, 27.0);
  frame_38_1291.counterAxisSizingMode = "AUTO";
  frame_38_1291.name = "Time";
  frame_38_1291.relativeTransform = [
    [1, 0, 0],
    [0, 1, 21],
  ];
  frame_38_1291.y = 21;
  frame_38_1291.layoutAlign = "STRETCH";
  frame_38_1291.fills = [];
  frame_38_1291.counterAxisAlignItems = "CENTER";
  frame_38_1291.primaryAxisSizingMode = "FIXED";
  frame_38_1291.strokeTopWeight = 1;
  frame_38_1291.strokeBottomWeight = 1;
  frame_38_1291.strokeLeftWeight = 1;
  frame_38_1291.strokeRightWeight = 1;
  frame_38_1291.clipsContent = false;
  frame_38_1291.expanded = false;
  frame_38_1291.layoutMode = "HORIZONTAL";
  frame_38_1291.counterAxisSizingMode = "AUTO";
  frame_38_1291.itemSpacing = 8;

  // Create TEXT
  var text_38_1292 = figma.createText();
  frame_38_1291.appendChild(text_38_1292);
  text_38_1292.fillStyleId = black_0056.id;
  text_38_1292.resize(78.0, 21.0);
  text_38_1292.name = "11 Jan 2022";
  text_38_1292.relativeTransform = [
    [1, 0, 0],
    [0, 1, 3],
  ];
  text_38_1292.y = 3;

  // Font properties
  text_38_1292.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_38_1292.characters = "11 Jan 2022";
  text_38_1292.listSpacing = 0;
  text_38_1292.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create TEXT
  var text_38_1293 = figma.createText();
  frame_38_1291.appendChild(text_38_1293);
  text_38_1293.fillStyleId = black_0056.id;
  text_38_1293.resize(7.0, 27.0);
  text_38_1293.name = "•";
  text_38_1293.relativeTransform = [
    [1, 0, 86],
    [0, 1, 0],
  ];
  text_38_1293.x = 86;

  // Font properties
  text_38_1293.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_38_1293.characters = "•";
  text_38_1293.listSpacing = 0;
  text_38_1293.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create TEXT
  var text_38_1294 = figma.createText();
  frame_38_1291.appendChild(text_38_1294);
  text_38_1294.fillStyleId = black_0056.id;
  text_38_1294.resize(66.0, 21.0);
  text_38_1294.name = "5 min read";
  text_38_1294.relativeTransform = [
    [1, 0, 101],
    [0, 1, 3],
  ];
  text_38_1294.x = 101;
  text_38_1294.y = 3;

  // Font properties
  text_38_1294.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_38_1294.characters = "5 min read";
  text_38_1294.listSpacing = 0;
  text_38_1294.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create FRAME
  var frame_38_1295 = figma.createFrame();
  frame_38_1201.appendChild(frame_38_1295);
  frame_38_1295.resize(416.0, 545.0);
  frame_38_1295.primaryAxisSizingMode = "AUTO";
  frame_38_1295.strokeStyleId = black_0056.id;
  frame_38_1295.name = "Card";
  frame_38_1295.relativeTransform = [
    [1, 0, 896],
    [0, 1, 0],
  ];
  frame_38_1295.x = 896;
  frame_38_1295.layoutGrow = 1;
  frame_38_1295.fills = [];
  frame_38_1295.strokeAlign = "OUTSIDE";
  frame_38_1295.strokeTopWeight = 1;
  frame_38_1295.strokeBottomWeight = 1;
  frame_38_1295.strokeLeftWeight = 1;
  frame_38_1295.strokeRightWeight = 1;
  frame_38_1295.clipsContent = false;
  frame_38_1295.expanded = false;
  frame_38_1295.layoutMode = "VERTICAL";

  // Create FRAME
  var frame_38_1296 = figma.createFrame();
  frame_38_1295.appendChild(frame_38_1296);
  frame_38_1296.resize(416.0, 295.0);
  frame_38_1296.name = "Header / 1 /";
  frame_38_1296.exportSettings = [
    {
      format: "PNG",
      suffix: "",
      contentsOnly: true,
      colorProfile: "DOCUMENT",
      constraint: { type: "SCALE", value: 1 },
    },
  ];
  frame_38_1296.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        r: 0.8588235378265381,
        g: 0.8588235378265381,
        b: 0.8588235378265381,
      },
      boundVariables: {},
    },
  ];
  frame_38_1296.paddingLeft = 64;
  frame_38_1296.paddingRight = 64;
  frame_38_1296.paddingTop = 112;
  frame_38_1296.paddingBottom = 112;
  frame_38_1296.primaryAxisAlignItems = "CENTER";
  frame_38_1296.counterAxisAlignItems = "CENTER";
  frame_38_1296.primaryAxisSizingMode = "FIXED";
  frame_38_1296.strokeTopWeight = 1;
  frame_38_1296.strokeBottomWeight = 1;
  frame_38_1296.strokeLeftWeight = 1;
  frame_38_1296.strokeRightWeight = 1;
  frame_38_1296.expanded = false;
  frame_38_1296.layoutMode = "HORIZONTAL";
  frame_38_1296.itemSpacing = 80;

  // Create TEXT
  var text_38_1297 = figma.createText();
  frame_38_1296.appendChild(text_38_1297);
  text_38_1297.resize(337.0, 60.0);
  text_38_1297.name = "Image Placeholder";
  text_38_1297.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 0, g: 0, b: 0 },
      boundVariables: {},
    },
  ];
  text_38_1297.relativeTransform = [
    [1, 0, 39.5],
    [0, 1, 117.5],
  ];
  text_38_1297.x = 39.5;
  text_38_1297.y = 117.5;

  // Font properties
  text_38_1297.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_38_1297.characters = "Image Placeholder ";
  text_38_1297.fontSize = 40;
  text_38_1297.listSpacing = 0;
  text_38_1297.lineHeight = { unit: "PERCENT", value: 150 };
  text_38_1297.fontName = { family: "Roboto", style: "Bold" };
  text_38_1297.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create FRAME
  var frame_38_1298 = figma.createFrame();
  frame_38_1295.appendChild(frame_38_1298);
  frame_38_1298.resize(416.0, 250.0);
  frame_38_1298.primaryAxisSizingMode = "AUTO";
  frame_38_1298.name = "Content";
  frame_38_1298.relativeTransform = [
    [1, 0, 0],
    [0, 1, 295],
  ];
  frame_38_1298.y = 295;
  frame_38_1298.layoutAlign = "STRETCH";
  frame_38_1298.fills = [];
  frame_38_1298.paddingLeft = 24;
  frame_38_1298.paddingRight = 24;
  frame_38_1298.paddingTop = 24;
  frame_38_1298.paddingBottom = 24;
  frame_38_1298.strokeTopWeight = 1;
  frame_38_1298.strokeBottomWeight = 1;
  frame_38_1298.strokeLeftWeight = 1;
  frame_38_1298.strokeRightWeight = 1;
  frame_38_1298.clipsContent = false;
  frame_38_1298.layoutMode = "VERTICAL";
  frame_38_1298.itemSpacing = 24;

  // Create FRAME
  var frame_38_1299 = figma.createFrame();
  frame_38_1298.appendChild(frame_38_1299);
  frame_38_1299.resize(368.0, 119.0);
  frame_38_1299.primaryAxisSizingMode = "AUTO";
  frame_38_1299.name = "Content";
  frame_38_1299.relativeTransform = [
    [1, 0, 24],
    [0, 1, 24],
  ];
  frame_38_1299.x = 24;
  frame_38_1299.y = 24;
  frame_38_1299.layoutAlign = "STRETCH";
  frame_38_1299.fills = [];
  frame_38_1299.strokeTopWeight = 1;
  frame_38_1299.strokeBottomWeight = 1;
  frame_38_1299.strokeLeftWeight = 1;
  frame_38_1299.strokeRightWeight = 1;
  frame_38_1299.clipsContent = false;
  frame_38_1299.expanded = false;
  frame_38_1299.layoutMode = "VERTICAL";
  frame_38_1299.itemSpacing = 8;

  // Create TEXT
  var text_38_1300 = figma.createText();
  frame_38_1299.appendChild(text_38_1300);
  text_38_1300.fillStyleId = black_0056.id;
  text_38_1300.resize(368.0, 21.0);
  text_38_1300.name = "Category";
  text_38_1300.layoutAlign = "STRETCH";

  // Font properties
  text_38_1300.fontName = {
    family: "Roboto",
    style: "SemiBold",
  };
  text_38_1300.characters = "Category";
  text_38_1300.listSpacing = 0;
  text_38_1300.textAutoResize = "HEIGHT";

  // Create FRAME
  var frame_38_1301 = figma.createFrame();
  frame_38_1299.appendChild(frame_38_1301);
  frame_38_1301.resize(368.0, 90.0);
  frame_38_1301.primaryAxisSizingMode = "AUTO";
  frame_38_1301.name = "Title";
  frame_38_1301.relativeTransform = [
    [1, 0, 0],
    [0, 1, 29],
  ];
  frame_38_1301.y = 29;
  frame_38_1301.fills = [];
  frame_38_1301.strokeTopWeight = 1;
  frame_38_1301.strokeBottomWeight = 1;
  frame_38_1301.strokeLeftWeight = 1;
  frame_38_1301.strokeRightWeight = 1;
  frame_38_1301.clipsContent = false;
  frame_38_1301.expanded = false;
  frame_38_1301.layoutMode = "VERTICAL";
  frame_38_1301.itemSpacing = 8;

  // Create TEXT
  var text_38_1302 = figma.createText();
  frame_38_1301.appendChild(text_38_1302);
  text_38_1302.fillStyleId = black_0056.id;
  text_38_1302.resize(368.0, 34.0);
  text_38_1302.name = "Blog title heading will go here";
  text_38_1302.layoutAlign = "STRETCH";

  // Font properties
  text_38_1302.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_38_1302.characters = "Blog title heading will go here";
  text_38_1302.listSpacing = 0;
  text_38_1302.textAutoResize = "HEIGHT";

  // Create TEXT
  var text_38_1303 = figma.createText();
  frame_38_1301.appendChild(text_38_1303);
  text_38_1303.fillStyleId = black_0056.id;
  text_38_1303.resize(368.0, 48.0);
  text_38_1303.name =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.";
  text_38_1303.relativeTransform = [
    [1, 0, 0],
    [0, 1, 42],
  ];
  text_38_1303.y = 42;
  text_38_1303.layoutAlign = "STRETCH";

  // Font properties
  text_38_1303.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_38_1303.characters =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.";
  text_38_1303.listSpacing = 0;
  text_38_1303.textAutoResize = "HEIGHT";

  // Create FRAME
  var frame_38_1304 = figma.createFrame();
  frame_38_1298.appendChild(frame_38_1304);
  frame_38_1304.resize(368.0, 59.0);
  frame_38_1304.counterAxisSizingMode = "AUTO";
  frame_38_1304.name = "Avatar";
  frame_38_1304.relativeTransform = [
    [1, 0, 24],
    [0, 1, 167],
  ];
  frame_38_1304.x = 24;
  frame_38_1304.y = 167;
  frame_38_1304.layoutAlign = "STRETCH";
  frame_38_1304.fills = [];
  frame_38_1304.counterAxisAlignItems = "CENTER";
  frame_38_1304.primaryAxisSizingMode = "FIXED";
  frame_38_1304.strokeTopWeight = 1;
  frame_38_1304.strokeBottomWeight = 1;
  frame_38_1304.strokeLeftWeight = 1;
  frame_38_1304.strokeRightWeight = 1;
  frame_38_1304.clipsContent = false;
  frame_38_1304.layoutMode = "HORIZONTAL";
  frame_38_1304.counterAxisSizingMode = "AUTO";
  frame_38_1304.itemSpacing = 16;

  // Create ELLIPSE
  var ellipse_38_1305 = figma.createEllipse();
  frame_38_1304.appendChild(ellipse_38_1305);
  ellipse_38_1305.resize(58.0, 59.0);
  ellipse_38_1305.name = "Ellipse 2";
  ellipse_38_1305.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        r: 0.8509804010391235,
        g: 0.8509804010391235,
        b: 0.8509804010391235,
      },
      boundVariables: {},
    },
  ];
  ellipse_38_1305.constrainProportions = true;

  // Create FRAME
  var frame_38_1306 = figma.createFrame();
  frame_38_1304.appendChild(frame_38_1306);
  frame_38_1306.resize(294.0, 48.0);
  frame_38_1306.primaryAxisSizingMode = "AUTO";
  frame_38_1306.name = "Content";
  frame_38_1306.relativeTransform = [
    [1, 0, 74],
    [0, 1, 5.5],
  ];
  frame_38_1306.x = 74;
  frame_38_1306.y = 5.5;
  frame_38_1306.layoutGrow = 1;
  frame_38_1306.fills = [];
  frame_38_1306.strokeTopWeight = 1;
  frame_38_1306.strokeBottomWeight = 1;
  frame_38_1306.strokeLeftWeight = 1;
  frame_38_1306.strokeRightWeight = 1;
  frame_38_1306.clipsContent = false;
  frame_38_1306.expanded = false;
  frame_38_1306.layoutMode = "VERTICAL";

  // Create TEXT
  var text_38_1307 = figma.createText();
  frame_38_1306.appendChild(text_38_1307);
  text_38_1307.fillStyleId = black_0056.id;
  text_38_1307.resize(294.0, 21.0);
  text_38_1307.name = "Full name";
  text_38_1307.layoutAlign = "STRETCH";

  // Font properties
  text_38_1307.fontName = {
    family: "Roboto",
    style: "SemiBold",
  };
  text_38_1307.characters = "Full name";
  text_38_1307.listSpacing = 0;
  text_38_1307.textAutoResize = "HEIGHT";

  // Create FRAME
  var frame_38_1308 = figma.createFrame();
  frame_38_1306.appendChild(frame_38_1308);
  frame_38_1308.resize(294.0, 27.0);
  frame_38_1308.counterAxisSizingMode = "AUTO";
  frame_38_1308.name = "Time";
  frame_38_1308.relativeTransform = [
    [1, 0, 0],
    [0, 1, 21],
  ];
  frame_38_1308.y = 21;
  frame_38_1308.layoutAlign = "STRETCH";
  frame_38_1308.fills = [];
  frame_38_1308.counterAxisAlignItems = "CENTER";
  frame_38_1308.primaryAxisSizingMode = "FIXED";
  frame_38_1308.strokeTopWeight = 1;
  frame_38_1308.strokeBottomWeight = 1;
  frame_38_1308.strokeLeftWeight = 1;
  frame_38_1308.strokeRightWeight = 1;
  frame_38_1308.clipsContent = false;
  frame_38_1308.expanded = false;
  frame_38_1308.layoutMode = "HORIZONTAL";
  frame_38_1308.counterAxisSizingMode = "AUTO";
  frame_38_1308.itemSpacing = 8;

  // Create TEXT
  var text_38_1309 = figma.createText();
  frame_38_1308.appendChild(text_38_1309);
  text_38_1309.fillStyleId = black_0056.id;
  text_38_1309.resize(78.0, 21.0);
  text_38_1309.name = "11 Jan 2022";
  text_38_1309.relativeTransform = [
    [1, 0, 0],
    [0, 1, 3],
  ];
  text_38_1309.y = 3;

  // Font properties
  text_38_1309.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_38_1309.characters = "11 Jan 2022";
  text_38_1309.listSpacing = 0;
  text_38_1309.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create TEXT
  var text_38_1310 = figma.createText();
  frame_38_1308.appendChild(text_38_1310);
  text_38_1310.fillStyleId = black_0056.id;
  text_38_1310.resize(7.0, 27.0);
  text_38_1310.name = "•";
  text_38_1310.relativeTransform = [
    [1, 0, 86],
    [0, 1, 0],
  ];
  text_38_1310.x = 86;

  // Font properties
  text_38_1310.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_38_1310.characters = "•";
  text_38_1310.listSpacing = 0;
  text_38_1310.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create TEXT
  var text_38_1311 = figma.createText();
  frame_38_1308.appendChild(text_38_1311);
  text_38_1311.fillStyleId = black_0056.id;
  text_38_1311.resize(66.0, 21.0);
  text_38_1311.name = "5 min read";
  text_38_1311.relativeTransform = [
    [1, 0, 101],
    [0, 1, 3],
  ];
  text_38_1311.x = 101;
  text_38_1311.y = 3;

  // Font properties
  text_38_1311.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_38_1311.characters = "5 min read";
  text_38_1311.listSpacing = 0;
  text_38_1311.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create FRAME
  var frame_38_1250 = figma.createFrame();
  frame_38_1200.appendChild(frame_38_1250);
  frame_38_1250.resize(104.0, 48.0);
  frame_38_1250.primaryAxisSizingMode = "AUTO";
  frame_38_1250.counterAxisSizingMode = "AUTO";
  frame_38_1250.strokeStyleId = black_0056.id;
  frame_38_1250.name = "Button";
  frame_38_1250.relativeTransform = [
    [1, 0, 604],
    [0, 1, 609],
  ];
  frame_38_1250.x = 604;
  frame_38_1250.y = 609;
  frame_38_1250.fills = [];
  frame_38_1250.strokeAlign = "OUTSIDE";
  frame_38_1250.paddingLeft = 24;
  frame_38_1250.paddingRight = 24;
  frame_38_1250.paddingTop = 12;
  frame_38_1250.paddingBottom = 12;
  frame_38_1250.primaryAxisAlignItems = "CENTER";
  frame_38_1250.counterAxisAlignItems = "CENTER";
  frame_38_1250.strokeTopWeight = 1;
  frame_38_1250.strokeBottomWeight = 1;
  frame_38_1250.strokeLeftWeight = 1;
  frame_38_1250.strokeRightWeight = 1;
  frame_38_1250.clipsContent = false;
  frame_38_1250.layoutMode = "HORIZONTAL";
  frame_38_1250.counterAxisSizingMode = "AUTO";
  frame_38_1250.itemSpacing = 8;

  // Create TEXT
  var text_38_1251 = figma.createText();
  frame_38_1250.appendChild(text_38_1251);
  text_38_1251.fillStyleId = black_0056.id;
  text_38_1251.resize(56.0, 24.0);
  text_38_1251.name = "Button";
  text_38_1251.relativeTransform = [
    [1, 0, 24],
    [0, 1, 12],
  ];
  text_38_1251.x = 24;
  text_38_1251.y = 12;

  // Font properties
  text_38_1251.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_38_1251.characters = "View all";
  text_38_1251.listSpacing = 0;
  text_38_1251.textAutoResize = "WIDTH_AND_HEIGHT";
};

const createFooter = async () => {
  // Load FONTS
  async function loadFonts() {
    await Promise.all([
      figma.loadFontAsync({
        family: "Roboto",
        style: "Regular",
      }),
      figma.loadFontAsync({
        family: "Roboto",
        style: "SemiBold",
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
  var frame_4221_673 = figma.createFrame();
  figma.currentPage.appendChild(frame_4221_673);
  frame_4221_673.resize(1440.0, 519.0);
  frame_4221_673.primaryAxisSizingMode = "AUTO";
  frame_4221_673.fillStyleId = white_77ad.id;
  frame_4221_673.backgroundStyleId = white_77ad.id;
  frame_4221_673.name = "Footer / 1 /";
  frame_4221_673.relativeTransform = [
    [1, 0, 2367],
    [0, 1, 352],
  ];
  frame_4221_673.x = 2367;
  frame_4221_673.y = 352;
  frame_4221_673.paddingLeft = 64;
  frame_4221_673.paddingRight = 64;
  frame_4221_673.paddingTop = 80;
  frame_4221_673.paddingBottom = 80;
  frame_4221_673.strokeTopWeight = 1;
  frame_4221_673.strokeBottomWeight = 1;
  frame_4221_673.strokeLeftWeight = 1;
  frame_4221_673.strokeRightWeight = 1;
  frame_4221_673.layoutMode = "VERTICAL";
  frame_4221_673.itemSpacing = 80;

  // Create FRAME
  var frame_4221_674 = figma.createFrame();
  frame_4221_673.appendChild(frame_4221_674);
  frame_4221_674.resize(1312.0, 225.0);
  frame_4221_674.counterAxisSizingMode = "AUTO";
  frame_4221_674.name = "Content";
  frame_4221_674.relativeTransform = [
    [1, 0, 64],
    [0, 1, 80],
  ];
  frame_4221_674.x = 64;
  frame_4221_674.y = 80;
  frame_4221_674.layoutAlign = "STRETCH";
  frame_4221_674.fills = [];
  frame_4221_674.primaryAxisSizingMode = "FIXED";
  frame_4221_674.strokeTopWeight = 1;
  frame_4221_674.strokeBottomWeight = 1;
  frame_4221_674.strokeLeftWeight = 1;
  frame_4221_674.strokeRightWeight = 1;
  frame_4221_674.clipsContent = false;
  frame_4221_674.layoutMode = "HORIZONTAL";
  frame_4221_674.counterAxisSizingMode = "AUTO";
  frame_4221_674.itemSpacing = 128;

  // Create FRAME
  var frame_4221_675 = figma.createFrame();
  frame_4221_674.appendChild(frame_4221_675);
  frame_4221_675.resize(500.0, 219.5);
  frame_4221_675.primaryAxisSizingMode = "AUTO";
  frame_4221_675.name = "Newsletter";
  frame_4221_675.fills = [];
  frame_4221_675.strokeTopWeight = 1;
  frame_4221_675.strokeBottomWeight = 1;
  frame_4221_675.strokeLeftWeight = 1;
  frame_4221_675.strokeRightWeight = 1;
  frame_4221_675.clipsContent = false;
  frame_4221_675.itemSpacing = 24;

  // Create TEXT
  var text_4222_2091 = figma.createText();
  frame_4221_675.appendChild(text_4222_2091);
  text_4222_2091.resize(36.0, 24.0);
  text_4222_2091.name = "Logo";
  text_4222_2091.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 0, g: 0, b: 0 },
      boundVariables: {},
    },
  ];

  // Font properties
  text_4222_2091.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4222_2091.characters = "Logo";
  text_4222_2091.listSpacing = 0;
  text_4222_2091.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create TEXT
  var text_4223_2133 = figma.createText();
  frame_4221_675.appendChild(text_4223_2133);
  text_4223_2133.fillStyleId = black_4902.id;
  text_4223_2133.resize(500.0, 24.0);
  text_4223_2133.relativeTransform = [
    [1, 0, 0],
    [0, 1, 48],
  ];
  text_4223_2133.y = 48;
  text_4223_2133.layoutAlign = "STRETCH";
  text_4223_2133.autoRename = false;

  // Font properties
  text_4223_2133.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4223_2133.characters =
    "Join our newsletter to stay up to date on features and releases.";
  text_4223_2133.listSpacing = 0;
  text_4223_2133.textAutoResize = "HEIGHT";

  // Create VECTOR
  var vector_4223_2093 = figma.createVector();
  frame_4221_675.appendChild(vector_4223_2093);
  vector_4223_2093.resize(376.0, 49.5);
  vector_4223_2093.name = "Rectangle 1";
  vector_4223_2093.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 1, g: 1, b: 1 },
      boundVariables: {},
    },
  ];
  vector_4223_2093.strokes = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 0, g: 0, b: 0 },
      boundVariables: {},
    },
  ];
  vector_4223_2093.strokeWeight = 2;
  vector_4223_2093.strokeAlign = "INSIDE";
  vector_4223_2093.relativeTransform = [
    [1, 0, 0],
    [0, 1, 96],
  ];
  vector_4223_2093.y = 96;
  vector_4223_2093.vectorNetwork = {
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
        x: 376,
        y: 0,
        strokeCap: "NONE",
        strokeJoin: "MITER",
        cornerRadius: 0,
        handleMirroring: "NONE",
      },
      {
        x: 376,
        y: 49.5,
        strokeCap: "NONE",
        strokeJoin: "MITER",
        cornerRadius: 0,
        handleMirroring: "NONE",
      },
      {
        x: 0,
        y: 49.5,
        strokeCap: "NONE",
        strokeJoin: "MITER",
        cornerRadius: 0,
        handleMirroring: "NONE",
      },
    ],
  };
  vector_4223_2093.vectorPaths = [
    {
      windingRule: "NONZERO",
      data: "M 0 0 L 376 0 L 376 49.5 L 0 49.5 L 0 0 Z",
    },
    {
      windingRule: "NONZERO",
      data: "M 0 0 L 376 0 L 376 49.5 L 0 49.5 L 0 0 Z",
    },
  ];

  // Create VECTOR
  var vector_4223_2132 = figma.createVector();
  frame_4221_675.appendChild(vector_4223_2132);
  vector_4223_2132.resize(106.0, 50.0);
  vector_4223_2132.name = "Rectangle 2";
  vector_4223_2132.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 1, g: 1, b: 1 },
      boundVariables: {},
    },
  ];
  vector_4223_2132.strokes = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 0, g: 0, b: 0 },
      boundVariables: {},
    },
  ];
  vector_4223_2132.strokeAlign = "INSIDE";
  vector_4223_2132.relativeTransform = [
    [1, 0, 394],
    [0, 1, 96],
  ];
  vector_4223_2132.x = 394;
  vector_4223_2132.y = 96;
  vector_4223_2132.vectorNetwork = {
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
        x: 106,
        y: 0,
        strokeCap: "NONE",
        strokeJoin: "MITER",
        cornerRadius: 0,
        handleMirroring: "NONE",
      },
      {
        x: 106,
        y: 50,
        strokeCap: "NONE",
        strokeJoin: "MITER",
        cornerRadius: 0,
        handleMirroring: "NONE",
      },
      {
        x: 0,
        y: 50,
        strokeCap: "NONE",
        strokeJoin: "MITER",
        cornerRadius: 0,
        handleMirroring: "NONE",
      },
    ],
  };
  vector_4223_2132.vectorPaths = [
    {
      windingRule: "NONZERO",
      data: "M 0 0 L 106 0 L 106 50 L 0 50 L 0 0 Z",
    },
  ];

  // Create TEXT
  var text_4221_681 = figma.createText();
  frame_4221_675.appendChild(text_4221_681);
  text_4221_681.resize(82.0, 24.0);
  text_4221_681.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 0.3125, g: 0.3125, b: 0.3125 },
      boundVariables: {},
    },
  ];
  text_4221_681.relativeTransform = [
    [1, 0, 409],
    [0, 1, 110],
  ];
  text_4221_681.x = 409;
  text_4221_681.y = 110;
  text_4221_681.layoutAlign = "STRETCH";
  text_4221_681.constraints = { horizontal: "MIN", vertical: "CENTER" };
  text_4221_681.autoRename = false;

  // Font properties
  text_4221_681.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4221_681.characters = "Subscribe";
  text_4221_681.listSpacing = 0;
  text_4221_681.textAutoResize = "NONE";

  // Create TEXT
  var text_4223_2134 = figma.createText();
  frame_4221_675.appendChild(text_4223_2134);
  text_4223_2134.resize(376.0, 24.0);
  text_4223_2134.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 0.3125, g: 0.3125, b: 0.3125 },
      boundVariables: {},
    },
  ];
  text_4223_2134.relativeTransform = [
    [1, 0, 0],
    [0, 1, 110],
  ];
  text_4223_2134.y = 110;
  text_4223_2134.layoutAlign = "STRETCH";
  text_4223_2134.constraints = { horizontal: "MIN", vertical: "CENTER" };
  text_4223_2134.autoRename = false;

  // Font properties
  text_4223_2134.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4223_2134.characters = "    Enter your email";
  text_4223_2134.listSpacing = 0;
  text_4223_2134.textAutoResize = "NONE";

  // Create FRAME
  var frame_4221_687 = figma.createFrame();
  frame_4221_674.appendChild(frame_4221_687);
  frame_4221_687.resize(684.0, 225.0);
  frame_4221_687.counterAxisSizingMode = "AUTO";
  frame_4221_687.name = "Links";
  frame_4221_687.relativeTransform = [
    [1, 0, 628],
    [0, 1, 0],
  ];
  frame_4221_687.x = 628;
  frame_4221_687.layoutGrow = 1;
  frame_4221_687.fills = [];
  frame_4221_687.primaryAxisSizingMode = "FIXED";
  frame_4221_687.strokeTopWeight = 1;
  frame_4221_687.strokeBottomWeight = 1;
  frame_4221_687.strokeLeftWeight = 1;
  frame_4221_687.strokeRightWeight = 1;
  frame_4221_687.clipsContent = false;
  frame_4221_687.layoutMode = "HORIZONTAL";
  frame_4221_687.counterAxisSizingMode = "AUTO";
  frame_4221_687.itemSpacing = 40;

  // Create FRAME
  var frame_4221_688 = figma.createFrame();
  frame_4221_687.appendChild(frame_4221_688);
  frame_4221_688.resize(201.3333282471, 225.0);
  frame_4221_688.primaryAxisSizingMode = "AUTO";
  frame_4221_688.name = "Column";
  frame_4221_688.layoutGrow = 1;
  frame_4221_688.fills = [];
  frame_4221_688.strokeTopWeight = 1;
  frame_4221_688.strokeBottomWeight = 1;
  frame_4221_688.strokeLeftWeight = 1;
  frame_4221_688.strokeRightWeight = 1;
  frame_4221_688.expanded = false;
  frame_4221_688.layoutMode = "VERTICAL";
  frame_4221_688.itemSpacing = 16;

  // Create TEXT
  var text_4221_689 = figma.createText();
  frame_4221_688.appendChild(text_4221_689);
  text_4221_689.fillStyleId = black_4902.id;
  text_4221_689.resize(201.3333282471, 24.0);
  text_4221_689.name = "Heading";
  text_4221_689.layoutAlign = "STRETCH";
  text_4221_689.autoRename = false;

  // Font properties
  text_4221_689.fontName = {
    family: "Roboto",
    style: "SemiBold",
  };
  text_4221_689.characters = "Column One";
  text_4221_689.listSpacing = 0;
  text_4221_689.textAutoResize = "HEIGHT";

  // Create FRAME
  var frame_4221_690 = figma.createFrame();
  frame_4221_688.appendChild(frame_4221_690);
  frame_4221_690.resize(201.3333282471, 185.0);
  frame_4221_690.primaryAxisSizingMode = "AUTO";
  frame_4221_690.name = "Footer Links";
  frame_4221_690.relativeTransform = [
    [1, 0, 0],
    [0, 1, 40],
  ];
  frame_4221_690.y = 40;
  frame_4221_690.layoutAlign = "STRETCH";
  frame_4221_690.fills = [];
  frame_4221_690.strokeTopWeight = 1;
  frame_4221_690.strokeBottomWeight = 1;
  frame_4221_690.strokeLeftWeight = 1;
  frame_4221_690.strokeRightWeight = 1;
  frame_4221_690.clipsContent = false;
  frame_4221_690.expanded = false;
  frame_4221_690.layoutMode = "VERTICAL";

  // Create FRAME
  var frame_4221_691 = figma.createFrame();
  frame_4221_690.appendChild(frame_4221_691);
  frame_4221_691.resize(201.3333282471, 37.0);
  frame_4221_691.counterAxisSizingMode = "AUTO";
  frame_4221_691.name = "Link";
  frame_4221_691.layoutAlign = "STRETCH";
  frame_4221_691.fills = [];
  frame_4221_691.paddingTop = 8;
  frame_4221_691.paddingBottom = 8;
  frame_4221_691.primaryAxisSizingMode = "FIXED";
  frame_4221_691.strokeTopWeight = 1;
  frame_4221_691.strokeBottomWeight = 1;
  frame_4221_691.strokeLeftWeight = 1;
  frame_4221_691.strokeRightWeight = 1;
  frame_4221_691.clipsContent = false;
  frame_4221_691.expanded = false;
  frame_4221_691.layoutMode = "HORIZONTAL";
  frame_4221_691.counterAxisSizingMode = "AUTO";

  // Create TEXT
  var text_4221_692 = figma.createText();
  frame_4221_691.appendChild(text_4221_692);
  text_4221_692.fillStyleId = black_4902.id;
  text_4221_692.resize(201.3333282471, 21.0);
  text_4221_692.name = "Link";
  text_4221_692.relativeTransform = [
    [1, 0, 0],
    [0, 1, 8],
  ];
  text_4221_692.y = 8;
  text_4221_692.layoutGrow = 1;
  text_4221_692.autoRename = false;

  // Font properties
  text_4221_692.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4221_692.characters = "Link One";
  text_4221_692.listSpacing = 0;
  text_4221_692.textAutoResize = "HEIGHT";

  // Create FRAME
  var frame_4221_693 = figma.createFrame();
  frame_4221_690.appendChild(frame_4221_693);
  frame_4221_693.resize(201.3333282471, 37.0);
  frame_4221_693.counterAxisSizingMode = "AUTO";
  frame_4221_693.name = "Link";
  frame_4221_693.relativeTransform = [
    [1, 0, 0],
    [0, 1, 37],
  ];
  frame_4221_693.y = 37;
  frame_4221_693.layoutAlign = "STRETCH";
  frame_4221_693.fills = [];
  frame_4221_693.paddingTop = 8;
  frame_4221_693.paddingBottom = 8;
  frame_4221_693.primaryAxisSizingMode = "FIXED";
  frame_4221_693.strokeTopWeight = 1;
  frame_4221_693.strokeBottomWeight = 1;
  frame_4221_693.strokeLeftWeight = 1;
  frame_4221_693.strokeRightWeight = 1;
  frame_4221_693.clipsContent = false;
  frame_4221_693.expanded = false;
  frame_4221_693.layoutMode = "HORIZONTAL";
  frame_4221_693.counterAxisSizingMode = "AUTO";

  // Create TEXT
  var text_4221_694 = figma.createText();
  frame_4221_693.appendChild(text_4221_694);
  text_4221_694.fillStyleId = black_4902.id;
  text_4221_694.resize(201.3333282471, 21.0);
  text_4221_694.name = "Link";
  text_4221_694.relativeTransform = [
    [1, 0, 0],
    [0, 1, 8],
  ];
  text_4221_694.y = 8;
  text_4221_694.layoutGrow = 1;
  text_4221_694.autoRename = false;

  // Font properties
  text_4221_694.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4221_694.characters = "Link Two";
  text_4221_694.listSpacing = 0;
  text_4221_694.textAutoResize = "HEIGHT";

  // Create FRAME
  var frame_4221_695 = figma.createFrame();
  frame_4221_690.appendChild(frame_4221_695);
  frame_4221_695.resize(201.3333282471, 37.0);
  frame_4221_695.counterAxisSizingMode = "AUTO";
  frame_4221_695.name = "Link";
  frame_4221_695.relativeTransform = [
    [1, 0, 0],
    [0, 1, 74],
  ];
  frame_4221_695.y = 74;
  frame_4221_695.layoutAlign = "STRETCH";
  frame_4221_695.fills = [];
  frame_4221_695.paddingTop = 8;
  frame_4221_695.paddingBottom = 8;
  frame_4221_695.primaryAxisSizingMode = "FIXED";
  frame_4221_695.strokeTopWeight = 1;
  frame_4221_695.strokeBottomWeight = 1;
  frame_4221_695.strokeLeftWeight = 1;
  frame_4221_695.strokeRightWeight = 1;
  frame_4221_695.clipsContent = false;
  frame_4221_695.expanded = false;
  frame_4221_695.layoutMode = "HORIZONTAL";
  frame_4221_695.counterAxisSizingMode = "AUTO";

  // Create TEXT
  var text_4221_696 = figma.createText();
  frame_4221_695.appendChild(text_4221_696);
  text_4221_696.fillStyleId = black_4902.id;
  text_4221_696.resize(201.3333282471, 21.0);
  text_4221_696.name = "Link";
  text_4221_696.relativeTransform = [
    [1, 0, 0],
    [0, 1, 8],
  ];
  text_4221_696.y = 8;
  text_4221_696.layoutGrow = 1;
  text_4221_696.autoRename = false;

  // Font properties
  text_4221_696.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4221_696.characters = "Link Three";
  text_4221_696.listSpacing = 0;
  text_4221_696.textAutoResize = "HEIGHT";

  // Create FRAME
  var frame_4221_697 = figma.createFrame();
  frame_4221_690.appendChild(frame_4221_697);
  frame_4221_697.resize(201.3333282471, 37.0);
  frame_4221_697.counterAxisSizingMode = "AUTO";
  frame_4221_697.name = "Link";
  frame_4221_697.relativeTransform = [
    [1, 0, 0],
    [0, 1, 111],
  ];
  frame_4221_697.y = 111;
  frame_4221_697.layoutAlign = "STRETCH";
  frame_4221_697.fills = [];
  frame_4221_697.paddingTop = 8;
  frame_4221_697.paddingBottom = 8;
  frame_4221_697.primaryAxisSizingMode = "FIXED";
  frame_4221_697.strokeTopWeight = 1;
  frame_4221_697.strokeBottomWeight = 1;
  frame_4221_697.strokeLeftWeight = 1;
  frame_4221_697.strokeRightWeight = 1;
  frame_4221_697.clipsContent = false;
  frame_4221_697.expanded = false;
  frame_4221_697.layoutMode = "HORIZONTAL";
  frame_4221_697.counterAxisSizingMode = "AUTO";

  // Create TEXT
  var text_4221_698 = figma.createText();
  frame_4221_697.appendChild(text_4221_698);
  text_4221_698.fillStyleId = black_4902.id;
  text_4221_698.resize(201.3333282471, 21.0);
  text_4221_698.name = "Link";
  text_4221_698.relativeTransform = [
    [1, 0, 0],
    [0, 1, 8],
  ];
  text_4221_698.y = 8;
  text_4221_698.layoutGrow = 1;
  text_4221_698.autoRename = false;

  // Font properties
  text_4221_698.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4221_698.characters = "Link Four";
  text_4221_698.listSpacing = 0;
  text_4221_698.textAutoResize = "HEIGHT";

  // Create FRAME
  var frame_4221_699 = figma.createFrame();
  frame_4221_690.appendChild(frame_4221_699);
  frame_4221_699.resize(201.3333282471, 37.0);
  frame_4221_699.counterAxisSizingMode = "AUTO";
  frame_4221_699.name = "Link";
  frame_4221_699.relativeTransform = [
    [1, 0, 0],
    [0, 1, 148],
  ];
  frame_4221_699.y = 148;
  frame_4221_699.layoutAlign = "STRETCH";
  frame_4221_699.fills = [];
  frame_4221_699.paddingTop = 8;
  frame_4221_699.paddingBottom = 8;
  frame_4221_699.primaryAxisSizingMode = "FIXED";
  frame_4221_699.strokeTopWeight = 1;
  frame_4221_699.strokeBottomWeight = 1;
  frame_4221_699.strokeLeftWeight = 1;
  frame_4221_699.strokeRightWeight = 1;
  frame_4221_699.clipsContent = false;
  frame_4221_699.expanded = false;
  frame_4221_699.layoutMode = "HORIZONTAL";
  frame_4221_699.counterAxisSizingMode = "AUTO";

  // Create TEXT
  var text_4221_700 = figma.createText();
  frame_4221_699.appendChild(text_4221_700);
  text_4221_700.fillStyleId = black_4902.id;
  text_4221_700.resize(201.3333282471, 21.0);
  text_4221_700.name = "Link";
  text_4221_700.relativeTransform = [
    [1, 0, 0],
    [0, 1, 8],
  ];
  text_4221_700.y = 8;
  text_4221_700.layoutGrow = 1;
  text_4221_700.autoRename = false;

  // Font properties
  text_4221_700.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4221_700.characters = "Link Five";
  text_4221_700.listSpacing = 0;
  text_4221_700.textAutoResize = "HEIGHT";

  // Create FRAME
  var frame_4221_701 = figma.createFrame();
  frame_4221_687.appendChild(frame_4221_701);
  frame_4221_701.resize(201.3333435059, 225.0);
  frame_4221_701.primaryAxisSizingMode = "AUTO";
  frame_4221_701.name = "Column";
  frame_4221_701.relativeTransform = [
    [1, 0, 241.3333282471],
    [0, 1, 0],
  ];
  frame_4221_701.x = 241.3333282470703;
  frame_4221_701.layoutGrow = 1;
  frame_4221_701.fills = [];
  frame_4221_701.strokeTopWeight = 1;
  frame_4221_701.strokeBottomWeight = 1;
  frame_4221_701.strokeLeftWeight = 1;
  frame_4221_701.strokeRightWeight = 1;
  frame_4221_701.expanded = false;
  frame_4221_701.layoutMode = "VERTICAL";
  frame_4221_701.itemSpacing = 16;

  // Create TEXT
  var text_4221_702 = figma.createText();
  frame_4221_701.appendChild(text_4221_702);
  text_4221_702.fillStyleId = black_4902.id;
  text_4221_702.resize(201.3333435059, 24.0);
  text_4221_702.name = "Heading";
  text_4221_702.layoutAlign = "STRETCH";
  text_4221_702.autoRename = false;

  // Font properties
  text_4221_702.fontName = {
    family: "Roboto",
    style: "SemiBold",
  };
  text_4221_702.characters = "Column Two";
  text_4221_702.listSpacing = 0;
  text_4221_702.textAutoResize = "HEIGHT";

  // Create FRAME
  var frame_4221_703 = figma.createFrame();
  frame_4221_701.appendChild(frame_4221_703);
  frame_4221_703.resize(201.3333435059, 185.0);
  frame_4221_703.primaryAxisSizingMode = "AUTO";
  frame_4221_703.name = "Footer Links";
  frame_4221_703.relativeTransform = [
    [1, 0, 0],
    [0, 1, 40],
  ];
  frame_4221_703.y = 40;
  frame_4221_703.layoutAlign = "STRETCH";
  frame_4221_703.fills = [];
  frame_4221_703.strokeTopWeight = 1;
  frame_4221_703.strokeBottomWeight = 1;
  frame_4221_703.strokeLeftWeight = 1;
  frame_4221_703.strokeRightWeight = 1;
  frame_4221_703.clipsContent = false;
  frame_4221_703.expanded = false;
  frame_4221_703.layoutMode = "VERTICAL";

  // Create FRAME
  var frame_4221_704 = figma.createFrame();
  frame_4221_703.appendChild(frame_4221_704);
  frame_4221_704.resize(201.3333435059, 37.0);
  frame_4221_704.counterAxisSizingMode = "AUTO";
  frame_4221_704.name = "Link";
  frame_4221_704.layoutAlign = "STRETCH";
  frame_4221_704.fills = [];
  frame_4221_704.paddingTop = 8;
  frame_4221_704.paddingBottom = 8;
  frame_4221_704.primaryAxisSizingMode = "FIXED";
  frame_4221_704.strokeTopWeight = 1;
  frame_4221_704.strokeBottomWeight = 1;
  frame_4221_704.strokeLeftWeight = 1;
  frame_4221_704.strokeRightWeight = 1;
  frame_4221_704.clipsContent = false;
  frame_4221_704.expanded = false;
  frame_4221_704.layoutMode = "HORIZONTAL";
  frame_4221_704.counterAxisSizingMode = "AUTO";

  // Create TEXT
  var text_4221_705 = figma.createText();
  frame_4221_704.appendChild(text_4221_705);
  text_4221_705.fillStyleId = black_4902.id;
  text_4221_705.resize(201.3333435059, 21.0);
  text_4221_705.name = "Link";
  text_4221_705.relativeTransform = [
    [1, 0, 0],
    [0, 1, 8],
  ];
  text_4221_705.y = 8;
  text_4221_705.layoutGrow = 1;
  text_4221_705.autoRename = false;

  // Font properties
  text_4221_705.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4221_705.characters = "Link Six";
  text_4221_705.listSpacing = 0;
  text_4221_705.textAutoResize = "HEIGHT";

  // Create FRAME
  var frame_4221_706 = figma.createFrame();
  frame_4221_703.appendChild(frame_4221_706);
  frame_4221_706.resize(201.3333435059, 37.0);
  frame_4221_706.counterAxisSizingMode = "AUTO";
  frame_4221_706.name = "Link";
  frame_4221_706.relativeTransform = [
    [1, 0, 0],
    [0, 1, 37],
  ];
  frame_4221_706.y = 37;
  frame_4221_706.layoutAlign = "STRETCH";
  frame_4221_706.fills = [];
  frame_4221_706.paddingTop = 8;
  frame_4221_706.paddingBottom = 8;
  frame_4221_706.primaryAxisSizingMode = "FIXED";
  frame_4221_706.strokeTopWeight = 1;
  frame_4221_706.strokeBottomWeight = 1;
  frame_4221_706.strokeLeftWeight = 1;
  frame_4221_706.strokeRightWeight = 1;
  frame_4221_706.clipsContent = false;
  frame_4221_706.expanded = false;
  frame_4221_706.layoutMode = "HORIZONTAL";
  frame_4221_706.counterAxisSizingMode = "AUTO";

  // Create TEXT
  var text_4221_707 = figma.createText();
  frame_4221_706.appendChild(text_4221_707);
  text_4221_707.fillStyleId = black_4902.id;
  text_4221_707.resize(201.3333435059, 21.0);
  text_4221_707.name = "Link";
  text_4221_707.relativeTransform = [
    [1, 0, 0],
    [0, 1, 8],
  ];
  text_4221_707.y = 8;
  text_4221_707.layoutGrow = 1;
  text_4221_707.autoRename = false;

  // Font properties
  text_4221_707.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4221_707.characters = "Link Seven";
  text_4221_707.listSpacing = 0;
  text_4221_707.textAutoResize = "HEIGHT";

  // Create FRAME
  var frame_4221_708 = figma.createFrame();
  frame_4221_703.appendChild(frame_4221_708);
  frame_4221_708.resize(201.3333435059, 37.0);
  frame_4221_708.counterAxisSizingMode = "AUTO";
  frame_4221_708.name = "Link";
  frame_4221_708.relativeTransform = [
    [1, 0, 0],
    [0, 1, 74],
  ];
  frame_4221_708.y = 74;
  frame_4221_708.layoutAlign = "STRETCH";
  frame_4221_708.fills = [];
  frame_4221_708.paddingTop = 8;
  frame_4221_708.paddingBottom = 8;
  frame_4221_708.primaryAxisSizingMode = "FIXED";
  frame_4221_708.strokeTopWeight = 1;
  frame_4221_708.strokeBottomWeight = 1;
  frame_4221_708.strokeLeftWeight = 1;
  frame_4221_708.strokeRightWeight = 1;
  frame_4221_708.clipsContent = false;
  frame_4221_708.expanded = false;
  frame_4221_708.layoutMode = "HORIZONTAL";
  frame_4221_708.counterAxisSizingMode = "AUTO";

  // Create TEXT
  var text_4221_709 = figma.createText();
  frame_4221_708.appendChild(text_4221_709);
  text_4221_709.fillStyleId = black_4902.id;
  text_4221_709.resize(201.3333435059, 21.0);
  text_4221_709.name = "Link";
  text_4221_709.relativeTransform = [
    [1, 0, 0],
    [0, 1, 8],
  ];
  text_4221_709.y = 8;
  text_4221_709.layoutGrow = 1;
  text_4221_709.autoRename = false;

  // Font properties
  text_4221_709.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4221_709.characters = "Link Eight";
  text_4221_709.listSpacing = 0;
  text_4221_709.textAutoResize = "HEIGHT";

  // Create FRAME
  var frame_4221_710 = figma.createFrame();
  frame_4221_703.appendChild(frame_4221_710);
  frame_4221_710.resize(201.3333435059, 37.0);
  frame_4221_710.counterAxisSizingMode = "AUTO";
  frame_4221_710.name = "Link";
  frame_4221_710.relativeTransform = [
    [1, 0, 0],
    [0, 1, 111],
  ];
  frame_4221_710.y = 111;
  frame_4221_710.layoutAlign = "STRETCH";
  frame_4221_710.fills = [];
  frame_4221_710.paddingTop = 8;
  frame_4221_710.paddingBottom = 8;
  frame_4221_710.primaryAxisSizingMode = "FIXED";
  frame_4221_710.strokeTopWeight = 1;
  frame_4221_710.strokeBottomWeight = 1;
  frame_4221_710.strokeLeftWeight = 1;
  frame_4221_710.strokeRightWeight = 1;
  frame_4221_710.clipsContent = false;
  frame_4221_710.expanded = false;
  frame_4221_710.layoutMode = "HORIZONTAL";
  frame_4221_710.counterAxisSizingMode = "AUTO";

  // Create TEXT
  var text_4221_711 = figma.createText();
  frame_4221_710.appendChild(text_4221_711);
  text_4221_711.fillStyleId = black_4902.id;
  text_4221_711.resize(201.3333435059, 21.0);
  text_4221_711.name = "Link";
  text_4221_711.relativeTransform = [
    [1, 0, 0],
    [0, 1, 8],
  ];
  text_4221_711.y = 8;
  text_4221_711.layoutGrow = 1;
  text_4221_711.autoRename = false;

  // Font properties
  text_4221_711.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4221_711.characters = "Link Nine";
  text_4221_711.listSpacing = 0;
  text_4221_711.textAutoResize = "HEIGHT";

  // Create FRAME
  var frame_4221_712 = figma.createFrame();
  frame_4221_703.appendChild(frame_4221_712);
  frame_4221_712.resize(201.3333435059, 37.0);
  frame_4221_712.counterAxisSizingMode = "AUTO";
  frame_4221_712.name = "Link";
  frame_4221_712.relativeTransform = [
    [1, 0, 0],
    [0, 1, 148],
  ];
  frame_4221_712.y = 148;
  frame_4221_712.layoutAlign = "STRETCH";
  frame_4221_712.fills = [];
  frame_4221_712.paddingTop = 8;
  frame_4221_712.paddingBottom = 8;
  frame_4221_712.primaryAxisSizingMode = "FIXED";
  frame_4221_712.strokeTopWeight = 1;
  frame_4221_712.strokeBottomWeight = 1;
  frame_4221_712.strokeLeftWeight = 1;
  frame_4221_712.strokeRightWeight = 1;
  frame_4221_712.clipsContent = false;
  frame_4221_712.expanded = false;
  frame_4221_712.layoutMode = "HORIZONTAL";
  frame_4221_712.counterAxisSizingMode = "AUTO";

  // Create TEXT
  var text_4221_713 = figma.createText();
  frame_4221_712.appendChild(text_4221_713);
  text_4221_713.fillStyleId = black_4902.id;
  text_4221_713.resize(201.3333435059, 21.0);
  text_4221_713.name = "Link";
  text_4221_713.relativeTransform = [
    [1, 0, 0],
    [0, 1, 8],
  ];
  text_4221_713.y = 8;
  text_4221_713.layoutGrow = 1;
  text_4221_713.autoRename = false;

  // Font properties
  text_4221_713.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4221_713.characters = "Link Ten";
  text_4221_713.listSpacing = 0;
  text_4221_713.textAutoResize = "HEIGHT";

  // Create FRAME
  var frame_4223_2119 = figma.createFrame();
  frame_4221_687.appendChild(frame_4223_2119);
  frame_4223_2119.resize(201.3333435059, 225.0);
  frame_4223_2119.primaryAxisSizingMode = "AUTO";
  frame_4223_2119.name = "Column";
  frame_4223_2119.relativeTransform = [
    [1, 0, 482.6666870117],
    [0, 1, 0],
  ];
  frame_4223_2119.x = 482.66668701171875;
  frame_4223_2119.layoutGrow = 1;
  frame_4223_2119.fills = [];
  frame_4223_2119.strokeTopWeight = 1;
  frame_4223_2119.strokeBottomWeight = 1;
  frame_4223_2119.strokeLeftWeight = 1;
  frame_4223_2119.strokeRightWeight = 1;
  frame_4223_2119.layoutMode = "VERTICAL";
  frame_4223_2119.itemSpacing = 16;

  // Create TEXT
  var text_4223_2120 = figma.createText();
  frame_4223_2119.appendChild(text_4223_2120);
  text_4223_2120.fillStyleId = black_4902.id;
  text_4223_2120.resize(201.3333435059, 24.0);
  text_4223_2120.name = "Heading";
  text_4223_2120.layoutAlign = "STRETCH";
  text_4223_2120.autoRename = false;

  // Font properties
  text_4223_2120.fontName = {
    family: "Roboto",
    style: "SemiBold",
  };
  text_4223_2120.characters = "Follow Us ";
  text_4223_2120.listSpacing = 0;
  text_4223_2120.textAutoResize = "HEIGHT";

  // Create FRAME
  var frame_4223_2121 = figma.createFrame();
  frame_4223_2119.appendChild(frame_4223_2121);
  frame_4223_2121.resize(201.3333435059, 185.0);
  frame_4223_2121.primaryAxisSizingMode = "AUTO";
  frame_4223_2121.name = "Footer Links";
  frame_4223_2121.relativeTransform = [
    [1, 0, 0],
    [0, 1, 40],
  ];
  frame_4223_2121.y = 40;
  frame_4223_2121.layoutAlign = "STRETCH";
  frame_4223_2121.fills = [];
  frame_4223_2121.strokeTopWeight = 1;
  frame_4223_2121.strokeBottomWeight = 1;
  frame_4223_2121.strokeLeftWeight = 1;
  frame_4223_2121.strokeRightWeight = 1;
  frame_4223_2121.clipsContent = false;
  frame_4223_2121.layoutMode = "VERTICAL";

  // Create FRAME
  var frame_4223_2122 = figma.createFrame();
  frame_4223_2121.appendChild(frame_4223_2122);
  frame_4223_2122.resize(201.3333435059, 37.0);
  frame_4223_2122.counterAxisSizingMode = "AUTO";
  frame_4223_2122.name = "Link";
  frame_4223_2122.layoutAlign = "STRETCH";
  frame_4223_2122.fills = [];
  frame_4223_2122.paddingTop = 8;
  frame_4223_2122.paddingBottom = 8;
  frame_4223_2122.primaryAxisSizingMode = "FIXED";
  frame_4223_2122.strokeTopWeight = 1;
  frame_4223_2122.strokeBottomWeight = 1;
  frame_4223_2122.strokeLeftWeight = 1;
  frame_4223_2122.strokeRightWeight = 1;
  frame_4223_2122.clipsContent = false;
  frame_4223_2122.layoutMode = "HORIZONTAL";
  frame_4223_2122.counterAxisSizingMode = "AUTO";

  // Create TEXT
  var text_4223_2123 = figma.createText();
  frame_4223_2122.appendChild(text_4223_2123);
  text_4223_2123.fillStyleId = black_4902.id;
  text_4223_2123.resize(201.3333435059, 21.0);
  text_4223_2123.name = "Link";
  text_4223_2123.relativeTransform = [
    [1, 0, 0],
    [0, 1, 8],
  ];
  text_4223_2123.y = 8;
  text_4223_2123.layoutGrow = 1;
  text_4223_2123.autoRename = false;

  // Font properties
  text_4223_2123.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4223_2123.characters = "Instagram";
  text_4223_2123.listSpacing = 0;
  text_4223_2123.textAutoResize = "HEIGHT";

  // Create FRAME
  var frame_4223_2124 = figma.createFrame();
  frame_4223_2121.appendChild(frame_4223_2124);
  frame_4223_2124.resize(201.3333435059, 37.0);
  frame_4223_2124.counterAxisSizingMode = "AUTO";
  frame_4223_2124.name = "Link";
  frame_4223_2124.relativeTransform = [
    [1, 0, 0],
    [0, 1, 37],
  ];
  frame_4223_2124.y = 37;
  frame_4223_2124.layoutAlign = "STRETCH";
  frame_4223_2124.fills = [];
  frame_4223_2124.paddingTop = 8;
  frame_4223_2124.paddingBottom = 8;
  frame_4223_2124.primaryAxisSizingMode = "FIXED";
  frame_4223_2124.strokeTopWeight = 1;
  frame_4223_2124.strokeBottomWeight = 1;
  frame_4223_2124.strokeLeftWeight = 1;
  frame_4223_2124.strokeRightWeight = 1;
  frame_4223_2124.clipsContent = false;
  frame_4223_2124.layoutMode = "HORIZONTAL";
  frame_4223_2124.counterAxisSizingMode = "AUTO";

  // Create TEXT
  var text_4223_2125 = figma.createText();
  frame_4223_2124.appendChild(text_4223_2125);
  text_4223_2125.fillStyleId = black_4902.id;
  text_4223_2125.resize(201.3333435059, 21.0);
  text_4223_2125.name = "Link";
  text_4223_2125.relativeTransform = [
    [1, 0, 0],
    [0, 1, 8],
  ];
  text_4223_2125.y = 8;
  text_4223_2125.layoutGrow = 1;
  text_4223_2125.autoRename = false;

  // Font properties
  text_4223_2125.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4223_2125.characters = "Twitter";
  text_4223_2125.listSpacing = 0;
  text_4223_2125.textAutoResize = "HEIGHT";

  // Create FRAME
  var frame_4223_2126 = figma.createFrame();
  frame_4223_2121.appendChild(frame_4223_2126);
  frame_4223_2126.resize(201.3333435059, 37.0);
  frame_4223_2126.counterAxisSizingMode = "AUTO";
  frame_4223_2126.name = "Link";
  frame_4223_2126.relativeTransform = [
    [1, 0, 0],
    [0, 1, 74],
  ];
  frame_4223_2126.y = 74;
  frame_4223_2126.layoutAlign = "STRETCH";
  frame_4223_2126.fills = [];
  frame_4223_2126.paddingTop = 8;
  frame_4223_2126.paddingBottom = 8;
  frame_4223_2126.primaryAxisSizingMode = "FIXED";
  frame_4223_2126.strokeTopWeight = 1;
  frame_4223_2126.strokeBottomWeight = 1;
  frame_4223_2126.strokeLeftWeight = 1;
  frame_4223_2126.strokeRightWeight = 1;
  frame_4223_2126.clipsContent = false;
  frame_4223_2126.layoutMode = "HORIZONTAL";
  frame_4223_2126.counterAxisSizingMode = "AUTO";

  // Create TEXT
  var text_4223_2127 = figma.createText();
  frame_4223_2126.appendChild(text_4223_2127);
  text_4223_2127.fillStyleId = black_4902.id;
  text_4223_2127.resize(201.3333435059, 21.0);
  text_4223_2127.name = "Link";
  text_4223_2127.relativeTransform = [
    [1, 0, 0],
    [0, 1, 8],
  ];
  text_4223_2127.y = 8;
  text_4223_2127.layoutGrow = 1;
  text_4223_2127.autoRename = false;

  // Font properties
  text_4223_2127.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4223_2127.characters = "Facebook";
  text_4223_2127.listSpacing = 0;
  text_4223_2127.textAutoResize = "HEIGHT";

  // Create FRAME
  var frame_4223_2128 = figma.createFrame();
  frame_4223_2121.appendChild(frame_4223_2128);
  frame_4223_2128.resize(201.3333435059, 37.0);
  frame_4223_2128.counterAxisSizingMode = "AUTO";
  frame_4223_2128.name = "Link";
  frame_4223_2128.relativeTransform = [
    [1, 0, 0],
    [0, 1, 111],
  ];
  frame_4223_2128.y = 111;
  frame_4223_2128.layoutAlign = "STRETCH";
  frame_4223_2128.fills = [];
  frame_4223_2128.paddingTop = 8;
  frame_4223_2128.paddingBottom = 8;
  frame_4223_2128.primaryAxisSizingMode = "FIXED";
  frame_4223_2128.strokeTopWeight = 1;
  frame_4223_2128.strokeBottomWeight = 1;
  frame_4223_2128.strokeLeftWeight = 1;
  frame_4223_2128.strokeRightWeight = 1;
  frame_4223_2128.clipsContent = false;
  frame_4223_2128.layoutMode = "HORIZONTAL";
  frame_4223_2128.counterAxisSizingMode = "AUTO";

  // Create FRAME
  var frame_4223_2130 = figma.createFrame();
  frame_4223_2121.appendChild(frame_4223_2130);
  frame_4223_2130.resize(201.3333435059, 37.0);
  frame_4223_2130.counterAxisSizingMode = "AUTO";
  frame_4223_2130.name = "Link";
  frame_4223_2130.relativeTransform = [
    [1, 0, 0],
    [0, 1, 148],
  ];
  frame_4223_2130.y = 148;
  frame_4223_2130.layoutAlign = "STRETCH";
  frame_4223_2130.fills = [];
  frame_4223_2130.paddingTop = 8;
  frame_4223_2130.paddingBottom = 8;
  frame_4223_2130.primaryAxisSizingMode = "FIXED";
  frame_4223_2130.strokeTopWeight = 1;
  frame_4223_2130.strokeBottomWeight = 1;
  frame_4223_2130.strokeLeftWeight = 1;
  frame_4223_2130.strokeRightWeight = 1;
  frame_4223_2130.clipsContent = false;
  frame_4223_2130.layoutMode = "HORIZONTAL";
  frame_4223_2130.counterAxisSizingMode = "AUTO";

  // Create FRAME
  var frame_4221_729 = figma.createFrame();
  frame_4221_673.appendChild(frame_4221_729);
  frame_4221_729.resize(1312.0, 54.0);
  frame_4221_729.primaryAxisSizingMode = "AUTO";
  frame_4221_729.name = "Credits";
  frame_4221_729.relativeTransform = [
    [1, 0, 64],
    [0, 1, 385],
  ];
  frame_4221_729.x = 64;
  frame_4221_729.y = 385;
  frame_4221_729.layoutAlign = "STRETCH";
  frame_4221_729.fills = [];
  frame_4221_729.strokeTopWeight = 1;
  frame_4221_729.strokeBottomWeight = 1;
  frame_4221_729.strokeLeftWeight = 1;
  frame_4221_729.strokeRightWeight = 1;
  frame_4221_729.clipsContent = false;
  frame_4221_729.expanded = false;
  frame_4221_729.layoutMode = "VERTICAL";
  frame_4221_729.itemSpacing = 32;

  // Create RECTANGLE
  var rectangle_4221_730 = figma.createRectangle();
  frame_4221_729.appendChild(rectangle_4221_730);
  rectangle_4221_730.fillStyleId = black_4902.id;
  rectangle_4221_730.resize(1312.0, 1.0);
  rectangle_4221_730.name = "Divider";
  rectangle_4221_730.layoutAlign = "STRETCH";
  rectangle_4221_730.strokeTopWeight = 1;
  rectangle_4221_730.strokeBottomWeight = 1;
  rectangle_4221_730.strokeLeftWeight = 1;
  rectangle_4221_730.strokeRightWeight = 1;

  // Create FRAME
  var frame_4221_731 = figma.createFrame();
  frame_4221_729.appendChild(frame_4221_731);
  frame_4221_731.resize(1312.0, 21.0);
  frame_4221_731.counterAxisSizingMode = "AUTO";
  frame_4221_731.name = "Row";
  frame_4221_731.relativeTransform = [
    [1, 0, 0],
    [0, 1, 33],
  ];
  frame_4221_731.y = 33;
  frame_4221_731.layoutAlign = "STRETCH";
  frame_4221_731.fills = [];
  frame_4221_731.primaryAxisAlignItems = "SPACE_BETWEEN";
  frame_4221_731.primaryAxisSizingMode = "FIXED";
  frame_4221_731.strokeTopWeight = 1;
  frame_4221_731.strokeBottomWeight = 1;
  frame_4221_731.strokeLeftWeight = 1;
  frame_4221_731.strokeRightWeight = 1;
  frame_4221_731.clipsContent = false;
  frame_4221_731.expanded = false;
  frame_4221_731.layoutMode = "HORIZONTAL";
  frame_4221_731.counterAxisSizingMode = "AUTO";
  frame_4221_731.itemSpacing = 64;

  // Create TEXT
  var text_4221_732 = figma.createText();
  frame_4221_731.appendChild(text_4221_732);
  text_4221_732.fillStyleId = black_4902.id;
  text_4221_732.resize(220.0, 21.0);
  text_4221_732.autoRename = false;

  // Font properties
  text_4221_732.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4221_732.characters = "© 2023 Relume. All rights reserved.";
  text_4221_732.listSpacing = 0;
  text_4221_732.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create FRAME
  var frame_4221_733 = figma.createFrame();
  frame_4221_731.appendChild(frame_4221_733);
  frame_4221_733.resize(345.0, 21.0);
  frame_4221_733.primaryAxisSizingMode = "AUTO";
  frame_4221_733.counterAxisSizingMode = "AUTO";
  frame_4221_733.name = "Footer Links";
  frame_4221_733.relativeTransform = [
    [1, 0, 967],
    [0, 1, 0],
  ];
  frame_4221_733.x = 967;
  frame_4221_733.fills = [];
  frame_4221_733.strokeTopWeight = 1;
  frame_4221_733.strokeBottomWeight = 1;
  frame_4221_733.strokeLeftWeight = 1;
  frame_4221_733.strokeRightWeight = 1;
  frame_4221_733.clipsContent = false;
  frame_4221_733.expanded = false;
  frame_4221_733.layoutMode = "HORIZONTAL";
  frame_4221_733.counterAxisSizingMode = "AUTO";
  frame_4221_733.itemSpacing = 24;

  // Create TEXT
  var text_4221_734 = figma.createText();
  frame_4221_733.appendChild(text_4221_734);
  text_4221_734.fillStyleId = black_4902.id;
  text_4221_734.resize(87.0, 21.0);
  text_4221_734.name = "Link";
  text_4221_734.autoRename = false;

  // Font properties
  text_4221_734.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4221_734.characters = "Privacy Policy";
  text_4221_734.listSpacing = 0;
  text_4221_734.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create TEXT
  var text_4221_735 = figma.createText();
  frame_4221_733.appendChild(text_4221_735);
  text_4221_735.fillStyleId = black_4902.id;
  text_4221_735.resize(105.0, 21.0);
  text_4221_735.name = "Link";
  text_4221_735.relativeTransform = [
    [1, 0, 111],
    [0, 1, 0],
  ];
  text_4221_735.x = 111;
  text_4221_735.autoRename = false;

  // Font properties
  text_4221_735.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4221_735.characters = "Terms of Service";
  text_4221_735.listSpacing = 0;
  text_4221_735.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create TEXT
  var text_4221_736 = figma.createText();
  frame_4221_733.appendChild(text_4221_736);
  text_4221_736.fillStyleId = black_4902.id;
  text_4221_736.resize(105.0, 21.0);
  text_4221_736.name = "Link";
  text_4221_736.relativeTransform = [
    [1, 0, 240],
    [0, 1, 0],
  ];
  text_4221_736.x = 240;
  text_4221_736.autoRename = false;

  // Font properties
  text_4221_736.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4221_736.characters = "Cookies Settings";
  text_4221_736.listSpacing = 0;
  text_4221_736.textAutoResize = "WIDTH_AND_HEIGHT";
};

const createContact = async () => {
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

  // Create FRAME
  var frame_4224_696 = figma.createFrame();
  figma.currentPage.appendChild(frame_4224_696);
  frame_4224_696.resize(1440.0, 1110.0);
  frame_4224_696.fillStyleId = white_77ad.id;
  frame_4224_696.backgroundStyleId = white_77ad.id;
  frame_4224_696.name = "Contact / 1 /";
  frame_4224_696.relativeTransform = [
    [1, 0, 2781],
    [0, 1, 396],
  ];
  frame_4224_696.x = 2781;
  frame_4224_696.y = 396;
  frame_4224_696.paddingLeft = 64;
  frame_4224_696.paddingRight = 64;
  frame_4224_696.paddingTop = 112;
  frame_4224_696.paddingBottom = 112;
  frame_4224_696.counterAxisAlignItems = "CENTER";
  frame_4224_696.primaryAxisSizingMode = "FIXED";
  frame_4224_696.strokeTopWeight = 1;
  frame_4224_696.strokeBottomWeight = 1;
  frame_4224_696.strokeLeftWeight = 1;
  frame_4224_696.strokeRightWeight = 1;
  frame_4224_696.layoutMode = "VERTICAL";
  frame_4224_696.itemSpacing = 22;

  // Create FRAME
  var frame_4224_697 = figma.createFrame();
  frame_4224_696.appendChild(frame_4224_697);
  frame_4224_697.resize(768.0, 152.0);
  frame_4224_697.primaryAxisSizingMode = "AUTO";
  frame_4224_697.name = "Section Title";
  frame_4224_697.relativeTransform = [
    [1, 0, 336],
    [0, 1, 112],
  ];
  frame_4224_697.x = 336;
  frame_4224_697.y = 112;
  frame_4224_697.fills = [];
  frame_4224_697.counterAxisAlignItems = "CENTER";
  frame_4224_697.strokeTopWeight = 1;
  frame_4224_697.strokeBottomWeight = 1;
  frame_4224_697.strokeLeftWeight = 1;
  frame_4224_697.strokeRightWeight = 1;
  frame_4224_697.clipsContent = false;
  frame_4224_697.layoutMode = "VERTICAL";
  frame_4224_697.itemSpacing = 16;

  // Create TEXT
  var text_4224_698 = figma.createText();
  frame_4224_697.appendChild(text_4224_698);
  text_4224_698.fillStyleId = black_4902.id;
  text_4224_698.resize(53.0, 24.0);
  text_4224_698.name = "Tagline";
  text_4224_698.relativeTransform = [
    [1, 0, 357.5],
    [0, 1, 0],
  ];
  text_4224_698.x = 357.5;

  // Font properties
  text_4224_698.fontName = {
    family: "Roboto",
    style: "SemiBold",
  };
  text_4224_698.characters = "Tagline";
  text_4224_698.listSpacing = 0;
  text_4224_698.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create TEXT
  var text_4224_745 = figma.createText();
  frame_4224_697.appendChild(text_4224_745);
  text_4224_745.fillStyleId = black_4902.id;
  text_4224_745.resize(234.0, 72.0);
  text_4224_745.name = "Contact us";
  text_4224_745.relativeTransform = [
    [1, 0, 267],
    [0, 1, 40],
  ];
  text_4224_745.x = 267;
  text_4224_745.y = 40;
  text_4224_745.exportSettings = [
    {
      format: "PNG",
      suffix: "",
      contentsOnly: true,
      colorProfile: "DOCUMENT",
      useAbsoluteBounds: false,
      constraint: { type: "SCALE", value: 1 },
    },
  ];

  // Font properties
  text_4224_745.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_4224_745.characters = "Contact us";
  text_4224_745.fontSize = 48;
  text_4224_745.listSpacing = 0;
  text_4224_745.lineHeight = { unit: "PERCENT", value: 150 };
  text_4224_745.fontName = { family: "Roboto", style: "Bold" };
  text_4224_745.textAutoResize = "HEIGHT";

  // Create TEXT
  var text_4224_747 = figma.createText();
  frame_4224_697.appendChild(text_4224_747);
  text_4224_747.fillStyleId = black_4902.id;
  text_4224_747.resize(444.0, 24.0);
  text_4224_747.name =
    "Lorem ispum dolor sit amet, consectetur adipiscing elit.";
  text_4224_747.relativeTransform = [
    [1, 0, 162],
    [0, 1, 128],
  ];
  text_4224_747.x = 162;
  text_4224_747.y = 128;
  text_4224_747.constraints = { horizontal: "CENTER", vertical: "MIN" };

  // Font properties
  text_4224_747.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4224_747.characters =
    "Lorem ispum dolor sit amet, consectetur adipiscing elit.";
  text_4224_747.fontSize = 18;
  text_4224_747.listSpacing = 0;
  text_4224_747.lineHeight = { unit: "PERCENT", value: 150 };
  text_4224_747.textAutoResize = "NONE";

  // Create FRAME
  var frame_4224_742 = figma.createFrame();
  frame_4224_696.appendChild(frame_4224_742);
  frame_4224_742.resize(556.0, 575.0);
  frame_4224_742.name = "Checkbox";
  frame_4224_742.relativeTransform = [
    [1, 0, 442],
    [0, 1, 286],
  ];
  frame_4224_742.x = 442;
  frame_4224_742.y = 286;
  frame_4224_742.fills = [];
  frame_4224_742.paddingBottom = 16;
  frame_4224_742.counterAxisAlignItems = "CENTER";
  frame_4224_742.primaryAxisSizingMode = "FIXED";
  frame_4224_742.strokeTopWeight = 1;
  frame_4224_742.strokeBottomWeight = 1;
  frame_4224_742.strokeLeftWeight = 1;
  frame_4224_742.strokeRightWeight = 1;
  frame_4224_742.clipsContent = false;
  frame_4224_742.itemSpacing = 12;

  // Create TEXT
  var text_4224_738 = figma.createText();
  frame_4224_742.appendChild(text_4224_738);
  text_4224_738.fillStyleId = black_4902.id;
  text_4224_738.resize(556.0, 7.1353120804);
  text_4224_738.name = "Name";
  text_4224_738.relativeTransform = [
    [1, 0, 0],
    [0, 1, 43],
  ];
  text_4224_738.y = 43;

  // Font properties
  text_4224_738.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4224_738.characters = "Name";
  text_4224_738.listSpacing = 0;
  text_4224_738.textAutoResize = "NONE";

  // Create RECTANGLE
  var rectangle_4224_737 = figma.createRectangle();
  frame_4224_742.appendChild(rectangle_4224_737);
  rectangle_4224_737.resize(556.0, 47.2714385986);
  rectangle_4224_737.name = "Rectangle 2";
  rectangle_4224_737.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 1, g: 1, b: 1 },
      boundVariables: {},
    },
  ];
  rectangle_4224_737.strokes = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 0, g: 0, b: 0 },
      boundVariables: {},
    },
  ];
  rectangle_4224_737.relativeTransform = [
    [1, 0, 0],
    [0, 1, 80.6609039307],
  ];
  rectangle_4224_737.y = 80.66090393066406;
  rectangle_4224_737.strokeTopWeight = 1;
  rectangle_4224_737.strokeBottomWeight = 1;
  rectangle_4224_737.strokeLeftWeight = 1;
  rectangle_4224_737.strokeRightWeight = 1;

  // Create TEXT
  var text_4224_704 = figma.createText();
  frame_4224_742.appendChild(text_4224_704);
  text_4224_704.fillStyleId = black_4902.id;
  text_4224_704.resize(556.0, 13.0);
  text_4224_704.name = "Message";
  text_4224_704.relativeTransform = [
    [1, 0, 0],
    [0, 1, 288],
  ];
  text_4224_704.y = 288;

  // Font properties
  text_4224_704.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4224_704.characters = "Message";
  text_4224_704.listSpacing = 0;
  text_4224_704.textAutoResize = "NONE";

  // Create RECTANGLE
  var rectangle_4224_739 = figma.createRectangle();
  frame_4224_742.appendChild(rectangle_4224_739);
  rectangle_4224_739.resize(556.0, 47.2714385986);
  rectangle_4224_739.name = "Rectangle 3";
  rectangle_4224_739.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 1, g: 1, b: 1 },
      boundVariables: {},
    },
  ];
  rectangle_4224_739.strokes = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 0, g: 0, b: 0 },
      boundVariables: {},
    },
  ];
  rectangle_4224_739.relativeTransform = [
    [1, 0, 0],
    [0, 1, 210],
  ];
  rectangle_4224_739.y = 210;
  rectangle_4224_739.strokeTopWeight = 1;
  rectangle_4224_739.strokeBottomWeight = 1;
  rectangle_4224_739.strokeLeftWeight = 1;
  rectangle_4224_739.strokeRightWeight = 1;

  // Create TEXT
  var text_4224_740 = figma.createText();
  frame_4224_742.appendChild(text_4224_740);
  text_4224_740.fillStyleId = black_4902.id;
  text_4224_740.resize(556.0, 7.1353120804);
  text_4224_740.name = "Email";
  text_4224_740.relativeTransform = [
    [1, 0, 0],
    [0, 1, 172],
  ];
  text_4224_740.y = 172;

  // Font properties
  text_4224_740.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4224_740.characters = "Email\n";
  text_4224_740.listSpacing = 0;
  text_4224_740.textAutoResize = "NONE";

  // Create RECTANGLE
  var rectangle_4224_735 = figma.createRectangle();
  frame_4224_742.appendChild(rectangle_4224_735);
  rectangle_4224_735.resize(556.0, 224.0);
  rectangle_4224_735.name = "Rectangle 1";
  rectangle_4224_735.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 1, g: 1, b: 1 },
      boundVariables: {},
    },
  ];
  rectangle_4224_735.strokes = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 0, g: 0, b: 0 },
      boundVariables: {},
    },
  ];
  rectangle_4224_735.relativeTransform = [
    [1, 0, 0],
    [0, 1, 322],
  ];
  rectangle_4224_735.y = 322;
  rectangle_4224_735.strokeTopWeight = 1;
  rectangle_4224_735.strokeBottomWeight = 1;
  rectangle_4224_735.strokeLeftWeight = 1;
  rectangle_4224_735.strokeRightWeight = 1;

  // Create TEXT
  var text_4224_741 = figma.createText();
  frame_4224_742.appendChild(text_4224_741);
  text_4224_741.resize(151.0, 24.0);
  text_4224_741.name = "Type your message...";
  text_4224_741.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 0.3125, g: 0.3125, b: 0.3125 },
      boundVariables: {},
    },
  ];
  text_4224_741.relativeTransform = [
    [1, 0, 16],
    [0, 1, 340.5255737305],
  ];
  text_4224_741.x = 16;
  text_4224_741.y = 340.52557373046875;

  // Font properties
  text_4224_741.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4224_741.characters = "Type your message... ";
  text_4224_741.listSpacing = 0;
  text_4224_741.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create FRAME
  var frame_4224_730 = figma.createFrame();
  frame_4224_696.appendChild(frame_4224_730);
  frame_4224_730.resize(146.0, 37.0);
  frame_4224_730.primaryAxisSizingMode = "AUTO";
  frame_4224_730.counterAxisSizingMode = "AUTO";
  frame_4224_730.name = "Checkbox";
  frame_4224_730.relativeTransform = [
    [1, 0, 647],
    [0, 1, 883],
  ];
  frame_4224_730.x = 647;
  frame_4224_730.y = 883;
  frame_4224_730.fills = [];
  frame_4224_730.paddingBottom = 16;
  frame_4224_730.counterAxisAlignItems = "CENTER";
  frame_4224_730.strokeTopWeight = 1;
  frame_4224_730.strokeBottomWeight = 1;
  frame_4224_730.strokeLeftWeight = 1;
  frame_4224_730.strokeRightWeight = 1;
  frame_4224_730.clipsContent = false;
  frame_4224_730.layoutMode = "HORIZONTAL";
  frame_4224_730.counterAxisSizingMode = "AUTO";
  frame_4224_730.itemSpacing = 12;

  // Create FRAME
  var frame_4224_731 = figma.createFrame();
  frame_4224_730.appendChild(frame_4224_731);
  frame_4224_731.resize(18.0, 18.0);
  frame_4224_731.primaryAxisSizingMode = "AUTO";
  frame_4224_731.fillStyleId = white_77ad.id;
  frame_4224_731.strokeStyleId = black_4902.id;
  frame_4224_731.backgroundStyleId = white_77ad.id;
  frame_4224_731.name = "Checkbox";
  frame_4224_731.relativeTransform = [
    [1, 0, 0],
    [0, 1, 1.5],
  ];
  frame_4224_731.y = 1.5;
  frame_4224_731.constrainProportions = true;
  frame_4224_731.strokeAlign = "OUTSIDE";
  frame_4224_731.strokeTopWeight = 1;
  frame_4224_731.strokeBottomWeight = 1;
  frame_4224_731.strokeLeftWeight = 1;
  frame_4224_731.strokeRightWeight = 1;
  frame_4224_731.expanded = false;

  // Create TEXT
  var text_4224_732 = figma.createText();
  frame_4224_730.appendChild(text_4224_732);
  text_4224_732.fillStyleId = black_4902.id;
  text_4224_732.resize(116.0, 21.0);
  text_4224_732.name = "Label";
  text_4224_732.relativeTransform = [
    [1, 0, 30],
    [0, 1, 0],
  ];
  text_4224_732.x = 30;
  text_4224_732.autoRename = false;

  // Font properties
  text_4224_732.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4224_732.characters = "I accept the Terms";
  text_4224_732.listSpacing = 0;
  text_4224_732.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create FRAME
  var frame_4224_733 = figma.createFrame();
  frame_4224_696.appendChild(frame_4224_733);
  frame_4224_733.resize(99.0, 48.0);
  frame_4224_733.primaryAxisSizingMode = "AUTO";
  frame_4224_733.counterAxisSizingMode = "AUTO";
  frame_4224_733.fillStyleId = black_4902.id;
  frame_4224_733.strokeStyleId = black_4902.id;
  frame_4224_733.backgroundStyleId = black_4902.id;
  frame_4224_733.name = "Button";
  frame_4224_733.relativeTransform = [
    [1, 0, 670.5],
    [0, 1, 942],
  ];
  frame_4224_733.x = 670.5;
  frame_4224_733.y = 942;
  frame_4224_733.strokeAlign = "OUTSIDE";
  frame_4224_733.paddingLeft = 24;
  frame_4224_733.paddingRight = 24;
  frame_4224_733.paddingTop = 12;
  frame_4224_733.paddingBottom = 12;
  frame_4224_733.primaryAxisAlignItems = "CENTER";
  frame_4224_733.counterAxisAlignItems = "CENTER";
  frame_4224_733.strokeTopWeight = 1;
  frame_4224_733.strokeBottomWeight = 1;
  frame_4224_733.strokeLeftWeight = 1;
  frame_4224_733.strokeRightWeight = 1;
  frame_4224_733.clipsContent = false;
  frame_4224_733.layoutMode = "HORIZONTAL";
  frame_4224_733.counterAxisSizingMode = "AUTO";
  frame_4224_733.itemSpacing = 8;

  // Create TEXT
  var text_4224_734 = figma.createText();
  frame_4224_733.appendChild(text_4224_734);
  text_4224_734.fillStyleId = white_77ad.id;
  text_4224_734.resize(51.0, 24.0);
  text_4224_734.name = "Button";
  text_4224_734.relativeTransform = [
    [1, 0, 24],
    [0, 1, 12],
  ];
  text_4224_734.x = 24;
  text_4224_734.y = 12;

  // Font properties
  text_4224_734.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4224_734.characters = "Submit";
  text_4224_734.listSpacing = 0;
  text_4224_734.textAutoResize = "WIDTH_AND_HEIGHT";
};

const createGallery = async () => {
  // Load FONTS
  async function loadFonts() {
    await Promise.all([
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
  var frame_4226_783 = figma.createFrame();
  figma.currentPage.appendChild(frame_4226_783);
  frame_4226_783.resize(1440.0, 1048.0);
  frame_4226_783.primaryAxisSizingMode = "AUTO";
  frame_4226_783.fillStyleId = white_77ad.id;
  frame_4226_783.backgroundStyleId = white_77ad.id;
  frame_4226_783.name = "Gallery / 6 /";
  frame_4226_783.relativeTransform = [
    [1, 0, 2288],
    [0, 1, 6102],
  ];
  frame_4226_783.x = 2288;
  frame_4226_783.y = 6102;
  frame_4226_783.paddingLeft = 64;
  frame_4226_783.paddingRight = 64;
  frame_4226_783.paddingTop = 112;
  frame_4226_783.paddingBottom = 112;
  frame_4226_783.counterAxisAlignItems = "CENTER";
  frame_4226_783.strokeTopWeight = 1;
  frame_4226_783.strokeBottomWeight = 1;
  frame_4226_783.strokeLeftWeight = 1;
  frame_4226_783.strokeRightWeight = 1;
  frame_4226_783.itemSpacing = 80;

  // Create FRAME
  var frame_4226_787 = figma.createFrame();
  frame_4226_783.appendChild(frame_4226_787);
  frame_4226_787.resize(1312.0, 600.0);
  frame_4226_787.primaryAxisSizingMode = "AUTO";
  frame_4226_787.name = "Content";
  frame_4226_787.relativeTransform = [
    [1, 0, 64],
    [0, 1, 336],
  ];
  frame_4226_787.x = 64;
  frame_4226_787.y = 336;
  frame_4226_787.fills = [];
  frame_4226_787.strokeTopWeight = 1;
  frame_4226_787.strokeBottomWeight = 1;
  frame_4226_787.strokeLeftWeight = 1;
  frame_4226_787.strokeRightWeight = 1;
  frame_4226_787.clipsContent = false;
  frame_4226_787.layoutMode = "VERTICAL";
  frame_4226_787.itemSpacing = 32;

  // Create FRAME
  var frame_4226_788 = figma.createFrame();
  frame_4226_787.appendChild(frame_4226_788);
  frame_4226_788.resize(1312.0, 284.0);
  frame_4226_788.counterAxisSizingMode = "AUTO";
  frame_4226_788.name = "Content";
  frame_4226_788.layoutAlign = "STRETCH";
  frame_4226_788.fills = [];
  frame_4226_788.primaryAxisSizingMode = "FIXED";
  frame_4226_788.strokeTopWeight = 1;
  frame_4226_788.strokeBottomWeight = 1;
  frame_4226_788.strokeLeftWeight = 1;
  frame_4226_788.strokeRightWeight = 1;
  frame_4226_788.clipsContent = false;
  frame_4226_788.layoutMode = "HORIZONTAL";
  frame_4226_788.counterAxisSizingMode = "AUTO";
  frame_4226_788.itemSpacing = 32;

  // Create RECTANGLE
  var rectangle_4226_803 = figma.createRectangle();
  frame_4226_788.appendChild(rectangle_4226_803);
  rectangle_4226_803.resize(302.0, 284.0);
  rectangle_4226_803.name = "Rectangle 1";
  rectangle_4226_803.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        r: 0.8509804010391235,
        g: 0.8509804010391235,
        b: 0.8509804010391235,
      },
      boundVariables: {},
    },
  ];
  rectangle_4226_803.strokeTopWeight = 1;
  rectangle_4226_803.strokeBottomWeight = 1;
  rectangle_4226_803.strokeLeftWeight = 1;
  rectangle_4226_803.strokeRightWeight = 1;

  // Create RECTANGLE
  var rectangle_4226_804 = figma.createRectangle();
  frame_4226_788.appendChild(rectangle_4226_804);
  rectangle_4226_804.resize(302.0, 284.0);
  rectangle_4226_804.name = "Rectangle 2";
  rectangle_4226_804.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        r: 0.8509804010391235,
        g: 0.8509804010391235,
        b: 0.8509804010391235,
      },
      boundVariables: {},
    },
  ];
  rectangle_4226_804.relativeTransform = [
    [1, 0, 334],
    [0, 1, 0],
  ];
  rectangle_4226_804.x = 334;
  rectangle_4226_804.strokeTopWeight = 1;
  rectangle_4226_804.strokeBottomWeight = 1;
  rectangle_4226_804.strokeLeftWeight = 1;
  rectangle_4226_804.strokeRightWeight = 1;

  // Create RECTANGLE
  var rectangle_4226_805 = figma.createRectangle();
  frame_4226_788.appendChild(rectangle_4226_805);
  rectangle_4226_805.resize(302.0, 284.0);
  rectangle_4226_805.name = "Rectangle 3";
  rectangle_4226_805.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        r: 0.8509804010391235,
        g: 0.8509804010391235,
        b: 0.8509804010391235,
      },
      boundVariables: {},
    },
  ];
  rectangle_4226_805.relativeTransform = [
    [1, 0, 668],
    [0, 1, 0],
  ];
  rectangle_4226_805.x = 668;
  rectangle_4226_805.strokeTopWeight = 1;
  rectangle_4226_805.strokeBottomWeight = 1;
  rectangle_4226_805.strokeLeftWeight = 1;
  rectangle_4226_805.strokeRightWeight = 1;

  // Create RECTANGLE
  var rectangle_4226_806 = figma.createRectangle();
  frame_4226_788.appendChild(rectangle_4226_806);
  rectangle_4226_806.resize(302.0, 284.0);
  rectangle_4226_806.name = "Rectangle 4";
  rectangle_4226_806.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        r: 0.8509804010391235,
        g: 0.8509804010391235,
        b: 0.8509804010391235,
      },
      boundVariables: {},
    },
  ];
  rectangle_4226_806.relativeTransform = [
    [1, 0, 1002],
    [0, 1, 0],
  ];
  rectangle_4226_806.x = 1002;
  rectangle_4226_806.strokeTopWeight = 1;
  rectangle_4226_806.strokeBottomWeight = 1;
  rectangle_4226_806.strokeLeftWeight = 1;
  rectangle_4226_806.strokeRightWeight = 1;

  // Create FRAME
  var frame_4226_793 = figma.createFrame();
  frame_4226_787.appendChild(frame_4226_793);
  frame_4226_793.resize(1312.0, 284.0);
  frame_4226_793.counterAxisSizingMode = "AUTO";
  frame_4226_793.name = "Content";
  frame_4226_793.relativeTransform = [
    [1, 0, 0],
    [0, 1, 316],
  ];
  frame_4226_793.y = 316;
  frame_4226_793.layoutAlign = "STRETCH";
  frame_4226_793.fills = [];
  frame_4226_793.primaryAxisSizingMode = "FIXED";
  frame_4226_793.strokeTopWeight = 1;
  frame_4226_793.strokeBottomWeight = 1;
  frame_4226_793.strokeLeftWeight = 1;
  frame_4226_793.strokeRightWeight = 1;
  frame_4226_793.clipsContent = false;
  frame_4226_793.layoutMode = "HORIZONTAL";
  frame_4226_793.counterAxisSizingMode = "AUTO";
  frame_4226_793.itemSpacing = 32;

  // Create RECTANGLE
  var rectangle_4226_799 = figma.createRectangle();
  frame_4226_793.appendChild(rectangle_4226_799);
  rectangle_4226_799.resize(302.0, 284.0);
  rectangle_4226_799.name = "Rectangle 1";
  rectangle_4226_799.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        r: 0.8509804010391235,
        g: 0.8509804010391235,
        b: 0.8509804010391235,
      },
      boundVariables: {},
    },
  ];
  rectangle_4226_799.strokeTopWeight = 1;
  rectangle_4226_799.strokeBottomWeight = 1;
  rectangle_4226_799.strokeLeftWeight = 1;
  rectangle_4226_799.strokeRightWeight = 1;

  // Create RECTANGLE
  var rectangle_4226_800 = figma.createRectangle();
  frame_4226_793.appendChild(rectangle_4226_800);
  rectangle_4226_800.resize(302.0, 284.0);
  rectangle_4226_800.name = "Rectangle 2";
  rectangle_4226_800.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        r: 0.8509804010391235,
        g: 0.8509804010391235,
        b: 0.8509804010391235,
      },
      boundVariables: {},
    },
  ];
  rectangle_4226_800.relativeTransform = [
    [1, 0, 334],
    [0, 1, 0],
  ];
  rectangle_4226_800.x = 334;
  rectangle_4226_800.strokeTopWeight = 1;
  rectangle_4226_800.strokeBottomWeight = 1;
  rectangle_4226_800.strokeLeftWeight = 1;
  rectangle_4226_800.strokeRightWeight = 1;

  // Create RECTANGLE
  var rectangle_4226_801 = figma.createRectangle();
  frame_4226_793.appendChild(rectangle_4226_801);
  rectangle_4226_801.resize(302.0, 284.0);
  rectangle_4226_801.name = "Rectangle 3";
  rectangle_4226_801.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        r: 0.8509804010391235,
        g: 0.8509804010391235,
        b: 0.8509804010391235,
      },
      boundVariables: {},
    },
  ];
  rectangle_4226_801.relativeTransform = [
    [1, 0, 668],
    [0, 1, 0],
  ];
  rectangle_4226_801.x = 668;
  rectangle_4226_801.strokeTopWeight = 1;
  rectangle_4226_801.strokeBottomWeight = 1;
  rectangle_4226_801.strokeLeftWeight = 1;
  rectangle_4226_801.strokeRightWeight = 1;

  // Create RECTANGLE
  var rectangle_4226_802 = figma.createRectangle();
  frame_4226_793.appendChild(rectangle_4226_802);
  rectangle_4226_802.resize(302.0, 284.0);
  rectangle_4226_802.name = "Rectangle 4";
  rectangle_4226_802.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        r: 0.8509804010391235,
        g: 0.8509804010391235,
        b: 0.8509804010391235,
      },
      boundVariables: {},
    },
  ];
  rectangle_4226_802.relativeTransform = [
    [1, 0, 1002],
    [0, 1, 0],
  ];
  rectangle_4226_802.x = 1002;
  rectangle_4226_802.strokeTopWeight = 1;
  rectangle_4226_802.strokeBottomWeight = 1;
  rectangle_4226_802.strokeLeftWeight = 1;
  rectangle_4226_802.strokeRightWeight = 1;

  // Create FRAME
  var frame_4226_784 = figma.createFrame();
  frame_4226_783.appendChild(frame_4226_784);
  frame_4226_784.resize(768.0, 96.0);
  frame_4226_784.primaryAxisSizingMode = "AUTO";
  frame_4226_784.name = "Section Title";
  frame_4226_784.relativeTransform = [
    [1, 0, 336],
    [0, 1, 112],
  ];
  frame_4226_784.x = 336;
  frame_4226_784.y = 112;
  frame_4226_784.fills = [];
  frame_4226_784.counterAxisAlignItems = "CENTER";
  frame_4226_784.strokeTopWeight = 1;
  frame_4226_784.strokeBottomWeight = 1;
  frame_4226_784.strokeLeftWeight = 1;
  frame_4226_784.strokeRightWeight = 1;
  frame_4226_784.clipsContent = false;
  frame_4226_784.itemSpacing = 24;

  // Create TEXT
  var text_4226_785 = figma.createText();
  frame_4226_784.appendChild(text_4226_785);
  text_4226_785.fillStyleId = black_4902.id;
  text_4226_785.resize(402.0, 96.0);
  text_4226_785.name = "Heading";
  text_4226_785.relativeTransform = [
    [1, 0, 183],
    [0, 1, 0],
  ];
  text_4226_785.x = 183;
  text_4226_785.autoRename = false;

  // Font properties
  text_4226_785.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_4226_785.characters = "Image Gallery";
  text_4226_785.fontSize = 64;
  text_4226_785.listSpacing = 0;
  text_4226_785.lineHeight = { unit: "PERCENT", value: 150 };
  text_4226_785.fontName = { family: "Roboto", style: "Bold" };
  text_4226_785.textAutoResize = "HEIGHT";

  // Create TEXT
  var text_4226_810 = figma.createText();
  frame_4226_783.appendChild(text_4226_810);
  text_4226_810.resize(727.0, 30.0);
  text_4226_810.name =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac lacus vel libero var";
  text_4226_810.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 0, g: 0, b: 0 },
      boundVariables: {},
    },
  ];
  text_4226_810.relativeTransform = [
    [1, 0, 356],
    [0, 1, 224],
  ];
  text_4226_810.x = 356;
  text_4226_810.y = 224;

  // Font properties
  text_4226_810.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4226_810.characters =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac lacus vel libero var";
  text_4226_810.fontSize = 20;
  text_4226_810.listSpacing = 0;
  text_4226_810.lineHeight = { unit: "PERCENT", value: 150 };
  text_4226_810.textAutoResize = "WIDTH_AND_HEIGHT";
};

const createCareer = async () => {
  // Load FONTS
  async function loadFonts() {
    await Promise.all([
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

  // Create FRAME
  var frame_4227_282 = figma.createFrame();
  figma.currentPage.appendChild(frame_4227_282);
  frame_4227_282.resize(1440.0, 1263.0);
  frame_4227_282.primaryAxisSizingMode = "AUTO";
  frame_4227_282.fillStyleId = white_77ad.id;
  frame_4227_282.backgroundStyleId = white_77ad.id;
  frame_4227_282.name = "Career / 16 /";
  frame_4227_282.relativeTransform = [
    [1, 0, 4704],
    [0, 1, 448],
  ];
  frame_4227_282.x = 4704;
  frame_4227_282.y = 448;
  frame_4227_282.paddingLeft = 64;
  frame_4227_282.paddingRight = 64;
  frame_4227_282.paddingTop = 112;
  frame_4227_282.paddingBottom = 112;
  frame_4227_282.counterAxisAlignItems = "CENTER";
  frame_4227_282.strokeTopWeight = 1;
  frame_4227_282.strokeBottomWeight = 1;
  frame_4227_282.strokeLeftWeight = 1;
  frame_4227_282.strokeRightWeight = 1;
  frame_4227_282.itemSpacing = 34;

  // Create FRAME
  var frame_4227_339 = figma.createFrame();
  frame_4227_282.appendChild(frame_4227_339);
  frame_4227_339.resize(66.0, 254.0);
  frame_4227_339.name = "Content";
  frame_4227_339.relativeTransform = [
    [1, 0, 687],
    [0, 1, 112],
  ];
  frame_4227_339.x = 687;
  frame_4227_339.y = 112;
  frame_4227_339.fills = [];
  frame_4227_339.counterAxisAlignItems = "CENTER";
  frame_4227_339.primaryAxisSizingMode = "FIXED";
  frame_4227_339.strokeTopWeight = 1;
  frame_4227_339.strokeBottomWeight = 1;
  frame_4227_339.strokeLeftWeight = 1;
  frame_4227_339.strokeRightWeight = 1;
  frame_4227_339.clipsContent = false;
  frame_4227_339.itemSpacing = 32;

  // Create TEXT
  var text_4227_367 = figma.createText();
  frame_4227_339.appendChild(text_4227_367);
  text_4227_367.resize(53.0, 24.0);
  text_4227_367.name = "Tagline";
  text_4227_367.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 0, g: 0, b: 0 },
      boundVariables: {},
    },
  ];
  text_4227_367.relativeTransform = [
    [1, 0, 6.5],
    [0, 1, 0],
  ];
  text_4227_367.x = 6.5;

  // Font properties
  text_4227_367.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_4227_367.characters = "Tagline";
  text_4227_367.listSpacing = 0;
  text_4227_367.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create TEXT
  var text_4227_396 = figma.createText();
  frame_4227_339.appendChild(text_4227_396);
  text_4227_396.resize(437.0, 96.0);
  text_4227_396.name = "Open Positions";
  text_4227_396.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 0, g: 0, b: 0 },
      boundVariables: {},
    },
  ];
  text_4227_396.relativeTransform = [
    [1, 0, -185],
    [0, 1, 41],
  ];
  text_4227_396.x = -185;
  text_4227_396.y = 41;
  text_4227_396.constraints = { horizontal: "CENTER", vertical: "MIN" };

  // Font properties
  text_4227_396.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_4227_396.characters = "Open Positions";
  text_4227_396.fontSize = 64;
  text_4227_396.listSpacing = 0;
  text_4227_396.lineHeight = { unit: "PERCENT", value: 150 };
  text_4227_396.fontName = { family: "Roboto", style: "Bold" };
  text_4227_396.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create FRAME
  var frame_4227_288 = figma.createFrame();
  frame_4227_282.appendChild(frame_4227_288);
  frame_4227_288.resize(768.0, 751.0);
  frame_4227_288.primaryAxisSizingMode = "AUTO";
  frame_4227_288.name = "Content";
  frame_4227_288.relativeTransform = [
    [1, 0, 336],
    [0, 1, 400],
  ];
  frame_4227_288.x = 336;
  frame_4227_288.y = 400;
  frame_4227_288.fills = [];
  frame_4227_288.counterAxisAlignItems = "CENTER";
  frame_4227_288.strokeTopWeight = 1;
  frame_4227_288.strokeBottomWeight = 1;
  frame_4227_288.strokeLeftWeight = 1;
  frame_4227_288.strokeRightWeight = 1;
  frame_4227_288.clipsContent = false;
  frame_4227_288.layoutMode = "VERTICAL";
  frame_4227_288.itemSpacing = 32;

  // Create FRAME
  var frame_4227_289 = figma.createFrame();
  frame_4227_288.appendChild(frame_4227_289);
  frame_4227_289.resize(768.0, 229.0);
  frame_4227_289.primaryAxisSizingMode = "AUTO";
  frame_4227_289.strokeStyleId = black_4902.id;
  frame_4227_289.name = "Card";
  frame_4227_289.layoutAlign = "STRETCH";
  frame_4227_289.fills = [];
  frame_4227_289.paddingLeft = 32;
  frame_4227_289.paddingRight = 32;
  frame_4227_289.paddingTop = 32;
  frame_4227_289.paddingBottom = 32;
  frame_4227_289.strokeTopWeight = 1;
  frame_4227_289.strokeBottomWeight = 1;
  frame_4227_289.strokeLeftWeight = 1;
  frame_4227_289.strokeRightWeight = 1;
  frame_4227_289.clipsContent = false;
  frame_4227_289.expanded = false;
  frame_4227_289.layoutMode = "VERTICAL";
  frame_4227_289.itemSpacing = 32;

  // Create FRAME
  var frame_4227_290 = figma.createFrame();
  frame_4227_289.appendChild(frame_4227_290);
  frame_4227_290.resize(704.0, 106.0);
  frame_4227_290.primaryAxisSizingMode = "AUTO";
  frame_4227_290.name = "Job";
  frame_4227_290.relativeTransform = [
    [1, 0, 32],
    [0, 1, 32],
  ];
  frame_4227_290.x = 32;
  frame_4227_290.y = 32;
  frame_4227_290.layoutAlign = "STRETCH";
  frame_4227_290.fills = [];
  frame_4227_290.strokeTopWeight = 1;
  frame_4227_290.strokeBottomWeight = 1;
  frame_4227_290.strokeLeftWeight = 1;
  frame_4227_290.strokeRightWeight = 1;
  frame_4227_290.clipsContent = false;
  frame_4227_290.expanded = false;
  frame_4227_290.layoutMode = "VERTICAL";
  frame_4227_290.itemSpacing = 24;

  // Create TEXT
  var text_4227_291 = figma.createText();
  frame_4227_290.appendChild(text_4227_291);
  text_4227_291.fillStyleId = black_4902.id;
  text_4227_291.resize(95.0, 34.0);
  text_4227_291.name = "Heading";
  text_4227_291.autoRename = false;

  // Font properties
  text_4227_291.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_4227_291.characters = "Job Title";
  text_4227_291.listSpacing = 0;
  text_4227_291.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create TEXT
  var text_4227_292 = figma.createText();
  frame_4227_290.appendChild(text_4227_292);
  text_4227_292.fillStyleId = black_4902.id;
  text_4227_292.resize(704.0, 48.0);
  text_4227_292.relativeTransform = [
    [1, 0, 0],
    [0, 1, 58],
  ];
  text_4227_292.y = 58;
  text_4227_292.layoutAlign = "STRETCH";
  text_4227_292.autoRename = false;

  // Font properties
  text_4227_292.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4227_292.characters =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. ";
  text_4227_292.listSpacing = 0;
  text_4227_292.textAutoResize = "HEIGHT";

  // Create FRAME
  var frame_4227_293 = figma.createFrame();
  frame_4227_289.appendChild(frame_4227_293);
  frame_4227_293.resize(206.0, 27.0);
  frame_4227_293.primaryAxisSizingMode = "AUTO";
  frame_4227_293.counterAxisSizingMode = "AUTO";
  frame_4227_293.name = "Info";
  frame_4227_293.relativeTransform = [
    [1, 0, 32],
    [0, 1, 170],
  ];
  frame_4227_293.x = 32;
  frame_4227_293.y = 170;
  frame_4227_293.fills = [];
  frame_4227_293.strokeTopWeight = 1;
  frame_4227_293.strokeBottomWeight = 1;
  frame_4227_293.strokeLeftWeight = 1;
  frame_4227_293.strokeRightWeight = 1;
  frame_4227_293.clipsContent = false;
  frame_4227_293.expanded = false;
  frame_4227_293.layoutMode = "HORIZONTAL";
  frame_4227_293.counterAxisSizingMode = "AUTO";
  frame_4227_293.itemSpacing = 24;

  // Create FRAME
  var frame_4227_294 = figma.createFrame();
  frame_4227_293.appendChild(frame_4227_294);
  frame_4227_294.resize(70.0, 27.0);
  frame_4227_294.primaryAxisSizingMode = "AUTO";
  frame_4227_294.counterAxisSizingMode = "AUTO";
  frame_4227_294.name = "Content";
  frame_4227_294.fills = [];
  frame_4227_294.counterAxisAlignItems = "CENTER";
  frame_4227_294.strokeTopWeight = 1;
  frame_4227_294.strokeBottomWeight = 1;
  frame_4227_294.strokeLeftWeight = 1;
  frame_4227_294.strokeRightWeight = 1;
  frame_4227_294.clipsContent = false;
  frame_4227_294.expanded = false;
  frame_4227_294.layoutMode = "HORIZONTAL";
  frame_4227_294.counterAxisSizingMode = "AUTO";
  frame_4227_294.itemSpacing = 12;

  // Create TEXT
  var text_4227_296 = figma.createText();
  frame_4227_294.appendChild(text_4227_296);
  text_4227_296.fillStyleId = black_4902.id;
  text_4227_296.resize(70.0, 27.0);
  text_4227_296.autoRename = false;

  // Font properties
  text_4227_296.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4227_296.characters = "Location";
  text_4227_296.listSpacing = 0;
  text_4227_296.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create FRAME
  var frame_4227_297 = figma.createFrame();
  frame_4227_293.appendChild(frame_4227_297);
  frame_4227_297.resize(112.0, 27.0);
  frame_4227_297.primaryAxisSizingMode = "AUTO";
  frame_4227_297.counterAxisSizingMode = "AUTO";
  frame_4227_297.name = "Content";
  frame_4227_297.relativeTransform = [
    [1, 0, 94],
    [0, 1, 0],
  ];
  frame_4227_297.x = 94;
  frame_4227_297.fills = [];
  frame_4227_297.counterAxisAlignItems = "CENTER";
  frame_4227_297.strokeTopWeight = 1;
  frame_4227_297.strokeBottomWeight = 1;
  frame_4227_297.strokeLeftWeight = 1;
  frame_4227_297.strokeRightWeight = 1;
  frame_4227_297.clipsContent = false;
  frame_4227_297.expanded = false;
  frame_4227_297.layoutMode = "HORIZONTAL";
  frame_4227_297.counterAxisSizingMode = "AUTO";
  frame_4227_297.itemSpacing = 12;

  // Create TEXT
  var text_4227_299 = figma.createText();
  frame_4227_297.appendChild(text_4227_299);
  text_4227_299.fillStyleId = black_4902.id;
  text_4227_299.resize(112.0, 27.0);
  text_4227_299.autoRename = false;

  // Font properties
  text_4227_299.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4227_299.characters = "Contract Type";
  text_4227_299.listSpacing = 0;
  text_4227_299.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create FRAME
  var frame_4227_300 = figma.createFrame();
  frame_4227_288.appendChild(frame_4227_300);
  frame_4227_300.resize(768.0, 229.0);
  frame_4227_300.primaryAxisSizingMode = "AUTO";
  frame_4227_300.strokeStyleId = black_4902.id;
  frame_4227_300.name = "Card";
  frame_4227_300.relativeTransform = [
    [1, 0, 0],
    [0, 1, 261],
  ];
  frame_4227_300.y = 261;
  frame_4227_300.layoutAlign = "STRETCH";
  frame_4227_300.fills = [];
  frame_4227_300.paddingLeft = 32;
  frame_4227_300.paddingRight = 32;
  frame_4227_300.paddingTop = 32;
  frame_4227_300.paddingBottom = 32;
  frame_4227_300.strokeTopWeight = 1;
  frame_4227_300.strokeBottomWeight = 1;
  frame_4227_300.strokeLeftWeight = 1;
  frame_4227_300.strokeRightWeight = 1;
  frame_4227_300.clipsContent = false;
  frame_4227_300.expanded = false;
  frame_4227_300.layoutMode = "VERTICAL";
  frame_4227_300.itemSpacing = 32;

  // Create FRAME
  var frame_4227_301 = figma.createFrame();
  frame_4227_300.appendChild(frame_4227_301);
  frame_4227_301.resize(704.0, 106.0);
  frame_4227_301.primaryAxisSizingMode = "AUTO";
  frame_4227_301.name = "Job";
  frame_4227_301.relativeTransform = [
    [1, 0, 32],
    [0, 1, 32],
  ];
  frame_4227_301.x = 32;
  frame_4227_301.y = 32;
  frame_4227_301.layoutAlign = "STRETCH";
  frame_4227_301.fills = [];
  frame_4227_301.strokeTopWeight = 1;
  frame_4227_301.strokeBottomWeight = 1;
  frame_4227_301.strokeLeftWeight = 1;
  frame_4227_301.strokeRightWeight = 1;
  frame_4227_301.clipsContent = false;
  frame_4227_301.expanded = false;
  frame_4227_301.layoutMode = "VERTICAL";
  frame_4227_301.itemSpacing = 24;

  // Create TEXT
  var text_4227_302 = figma.createText();
  frame_4227_301.appendChild(text_4227_302);
  text_4227_302.fillStyleId = black_4902.id;
  text_4227_302.resize(95.0, 34.0);
  text_4227_302.name = "Heading";
  text_4227_302.autoRename = false;

  // Font properties
  text_4227_302.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_4227_302.characters = "Job Title";
  text_4227_302.listSpacing = 0;
  text_4227_302.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create TEXT
  var text_4227_303 = figma.createText();
  frame_4227_301.appendChild(text_4227_303);
  text_4227_303.fillStyleId = black_4902.id;
  text_4227_303.resize(704.0, 48.0);
  text_4227_303.relativeTransform = [
    [1, 0, 0],
    [0, 1, 58],
  ];
  text_4227_303.y = 58;
  text_4227_303.layoutAlign = "STRETCH";
  text_4227_303.autoRename = false;

  // Font properties
  text_4227_303.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4227_303.characters =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. ";
  text_4227_303.listSpacing = 0;
  text_4227_303.textAutoResize = "HEIGHT";

  // Create FRAME
  var frame_4227_304 = figma.createFrame();
  frame_4227_300.appendChild(frame_4227_304);
  frame_4227_304.resize(206.0, 27.0);
  frame_4227_304.primaryAxisSizingMode = "AUTO";
  frame_4227_304.counterAxisSizingMode = "AUTO";
  frame_4227_304.name = "Info";
  frame_4227_304.relativeTransform = [
    [1, 0, 32],
    [0, 1, 170],
  ];
  frame_4227_304.x = 32;
  frame_4227_304.y = 170;
  frame_4227_304.fills = [];
  frame_4227_304.strokeTopWeight = 1;
  frame_4227_304.strokeBottomWeight = 1;
  frame_4227_304.strokeLeftWeight = 1;
  frame_4227_304.strokeRightWeight = 1;
  frame_4227_304.clipsContent = false;
  frame_4227_304.expanded = false;
  frame_4227_304.layoutMode = "HORIZONTAL";
  frame_4227_304.counterAxisSizingMode = "AUTO";
  frame_4227_304.itemSpacing = 24;

  // Create FRAME
  var frame_4227_305 = figma.createFrame();
  frame_4227_304.appendChild(frame_4227_305);
  frame_4227_305.resize(70.0, 27.0);
  frame_4227_305.primaryAxisSizingMode = "AUTO";
  frame_4227_305.counterAxisSizingMode = "AUTO";
  frame_4227_305.name = "Content";
  frame_4227_305.fills = [];
  frame_4227_305.counterAxisAlignItems = "CENTER";
  frame_4227_305.strokeTopWeight = 1;
  frame_4227_305.strokeBottomWeight = 1;
  frame_4227_305.strokeLeftWeight = 1;
  frame_4227_305.strokeRightWeight = 1;
  frame_4227_305.clipsContent = false;
  frame_4227_305.expanded = false;
  frame_4227_305.layoutMode = "HORIZONTAL";
  frame_4227_305.counterAxisSizingMode = "AUTO";
  frame_4227_305.itemSpacing = 12;

  // Create TEXT
  var text_4227_307 = figma.createText();
  frame_4227_305.appendChild(text_4227_307);
  text_4227_307.fillStyleId = black_4902.id;
  text_4227_307.resize(70.0, 27.0);
  text_4227_307.autoRename = false;

  // Font properties
  text_4227_307.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4227_307.characters = "Location";
  text_4227_307.listSpacing = 0;
  text_4227_307.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create FRAME
  var frame_4227_308 = figma.createFrame();
  frame_4227_304.appendChild(frame_4227_308);
  frame_4227_308.resize(112.0, 27.0);
  frame_4227_308.primaryAxisSizingMode = "AUTO";
  frame_4227_308.counterAxisSizingMode = "AUTO";
  frame_4227_308.name = "Content";
  frame_4227_308.relativeTransform = [
    [1, 0, 94],
    [0, 1, 0],
  ];
  frame_4227_308.x = 94;
  frame_4227_308.fills = [];
  frame_4227_308.counterAxisAlignItems = "CENTER";
  frame_4227_308.strokeTopWeight = 1;
  frame_4227_308.strokeBottomWeight = 1;
  frame_4227_308.strokeLeftWeight = 1;
  frame_4227_308.strokeRightWeight = 1;
  frame_4227_308.clipsContent = false;
  frame_4227_308.expanded = false;
  frame_4227_308.layoutMode = "HORIZONTAL";
  frame_4227_308.counterAxisSizingMode = "AUTO";
  frame_4227_308.itemSpacing = 12;

  // Create TEXT
  var text_4227_310 = figma.createText();
  frame_4227_308.appendChild(text_4227_310);
  text_4227_310.fillStyleId = black_4902.id;
  text_4227_310.resize(112.0, 27.0);
  text_4227_310.autoRename = false;

  // Font properties
  text_4227_310.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4227_310.characters = "Contract Type";
  text_4227_310.listSpacing = 0;
  text_4227_310.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create FRAME
  var frame_4227_311 = figma.createFrame();
  frame_4227_288.appendChild(frame_4227_311);
  frame_4227_311.resize(768.0, 229.0);
  frame_4227_311.primaryAxisSizingMode = "AUTO";
  frame_4227_311.strokeStyleId = black_4902.id;
  frame_4227_311.name = "Card";
  frame_4227_311.relativeTransform = [
    [1, 0, 0],
    [0, 1, 522],
  ];
  frame_4227_311.y = 522;
  frame_4227_311.layoutAlign = "STRETCH";
  frame_4227_311.fills = [];
  frame_4227_311.paddingLeft = 32;
  frame_4227_311.paddingRight = 32;
  frame_4227_311.paddingTop = 32;
  frame_4227_311.paddingBottom = 32;
  frame_4227_311.strokeTopWeight = 1;
  frame_4227_311.strokeBottomWeight = 1;
  frame_4227_311.strokeLeftWeight = 1;
  frame_4227_311.strokeRightWeight = 1;
  frame_4227_311.clipsContent = false;
  frame_4227_311.expanded = false;
  frame_4227_311.layoutMode = "VERTICAL";
  frame_4227_311.itemSpacing = 32;

  // Create FRAME
  var frame_4227_312 = figma.createFrame();
  frame_4227_311.appendChild(frame_4227_312);
  frame_4227_312.resize(704.0, 106.0);
  frame_4227_312.primaryAxisSizingMode = "AUTO";
  frame_4227_312.name = "Job";
  frame_4227_312.relativeTransform = [
    [1, 0, 32],
    [0, 1, 32],
  ];
  frame_4227_312.x = 32;
  frame_4227_312.y = 32;
  frame_4227_312.layoutAlign = "STRETCH";
  frame_4227_312.fills = [];
  frame_4227_312.strokeTopWeight = 1;
  frame_4227_312.strokeBottomWeight = 1;
  frame_4227_312.strokeLeftWeight = 1;
  frame_4227_312.strokeRightWeight = 1;
  frame_4227_312.clipsContent = false;
  frame_4227_312.expanded = false;
  frame_4227_312.layoutMode = "VERTICAL";
  frame_4227_312.itemSpacing = 24;

  // Create TEXT
  var text_4227_313 = figma.createText();
  frame_4227_312.appendChild(text_4227_313);
  text_4227_313.fillStyleId = black_4902.id;
  text_4227_313.resize(95.0, 34.0);
  text_4227_313.name = "Heading";
  text_4227_313.autoRename = false;

  // Font properties
  text_4227_313.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_4227_313.characters = "Job Title";
  text_4227_313.listSpacing = 0;
  text_4227_313.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create TEXT
  var text_4227_314 = figma.createText();
  frame_4227_312.appendChild(text_4227_314);
  text_4227_314.fillStyleId = black_4902.id;
  text_4227_314.resize(704.0, 48.0);
  text_4227_314.relativeTransform = [
    [1, 0, 0],
    [0, 1, 58],
  ];
  text_4227_314.y = 58;
  text_4227_314.layoutAlign = "STRETCH";
  text_4227_314.autoRename = false;

  // Font properties
  text_4227_314.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4227_314.characters =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. ";
  text_4227_314.listSpacing = 0;
  text_4227_314.textAutoResize = "HEIGHT";

  // Create FRAME
  var frame_4227_315 = figma.createFrame();
  frame_4227_311.appendChild(frame_4227_315);
  frame_4227_315.resize(206.0, 27.0);
  frame_4227_315.primaryAxisSizingMode = "AUTO";
  frame_4227_315.counterAxisSizingMode = "AUTO";
  frame_4227_315.name = "Info";
  frame_4227_315.relativeTransform = [
    [1, 0, 32],
    [0, 1, 170],
  ];
  frame_4227_315.x = 32;
  frame_4227_315.y = 170;
  frame_4227_315.fills = [];
  frame_4227_315.strokeTopWeight = 1;
  frame_4227_315.strokeBottomWeight = 1;
  frame_4227_315.strokeLeftWeight = 1;
  frame_4227_315.strokeRightWeight = 1;
  frame_4227_315.clipsContent = false;
  frame_4227_315.expanded = false;
  frame_4227_315.layoutMode = "HORIZONTAL";
  frame_4227_315.counterAxisSizingMode = "AUTO";
  frame_4227_315.itemSpacing = 24;

  // Create FRAME
  var frame_4227_316 = figma.createFrame();
  frame_4227_315.appendChild(frame_4227_316);
  frame_4227_316.resize(70.0, 27.0);
  frame_4227_316.primaryAxisSizingMode = "AUTO";
  frame_4227_316.counterAxisSizingMode = "AUTO";
  frame_4227_316.name = "Content";
  frame_4227_316.fills = [];
  frame_4227_316.counterAxisAlignItems = "CENTER";
  frame_4227_316.strokeTopWeight = 1;
  frame_4227_316.strokeBottomWeight = 1;
  frame_4227_316.strokeLeftWeight = 1;
  frame_4227_316.strokeRightWeight = 1;
  frame_4227_316.clipsContent = false;
  frame_4227_316.expanded = false;
  frame_4227_316.layoutMode = "HORIZONTAL";
  frame_4227_316.counterAxisSizingMode = "AUTO";
  frame_4227_316.itemSpacing = 12;

  // Create TEXT
  var text_4227_318 = figma.createText();
  frame_4227_316.appendChild(text_4227_318);
  text_4227_318.fillStyleId = black_4902.id;
  text_4227_318.resize(70.0, 27.0);
  text_4227_318.autoRename = false;

  // Font properties
  text_4227_318.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4227_318.characters = "Location";
  text_4227_318.listSpacing = 0;
  text_4227_318.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create FRAME
  var frame_4227_319 = figma.createFrame();
  frame_4227_315.appendChild(frame_4227_319);
  frame_4227_319.resize(112.0, 27.0);
  frame_4227_319.primaryAxisSizingMode = "AUTO";
  frame_4227_319.counterAxisSizingMode = "AUTO";
  frame_4227_319.name = "Content";
  frame_4227_319.relativeTransform = [
    [1, 0, 94],
    [0, 1, 0],
  ];
  frame_4227_319.x = 94;
  frame_4227_319.fills = [];
  frame_4227_319.counterAxisAlignItems = "CENTER";
  frame_4227_319.strokeTopWeight = 1;
  frame_4227_319.strokeBottomWeight = 1;
  frame_4227_319.strokeLeftWeight = 1;
  frame_4227_319.strokeRightWeight = 1;
  frame_4227_319.clipsContent = false;
  frame_4227_319.expanded = false;
  frame_4227_319.layoutMode = "HORIZONTAL";
  frame_4227_319.counterAxisSizingMode = "AUTO";
  frame_4227_319.itemSpacing = 12;

  // Create TEXT
  var text_4227_321 = figma.createText();
  frame_4227_319.appendChild(text_4227_321);
  text_4227_321.fillStyleId = black_4902.id;
  text_4227_321.resize(112.0, 27.0);
  text_4227_321.autoRename = false;

  // Font properties
  text_4227_321.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4227_321.characters = "Contract Type";
  text_4227_321.listSpacing = 0;
  text_4227_321.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create TEXT
  var text_4228_401 = figma.createText();
  frame_4227_282.appendChild(text_4228_401);
  text_4228_401.resize(717.0, 27.0);
  text_4228_401.name =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt";
  text_4228_401.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 0, g: 0, b: 0 },
      boundVariables: {},
    },
  ];
  text_4228_401.relativeTransform = [
    [1, 0, 361],
    [0, 1, 277],
  ];
  text_4228_401.x = 361;
  text_4228_401.y = 277;

  // Font properties
  text_4228_401.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4228_401.characters =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt";
  text_4228_401.fontSize = 18;
  text_4228_401.listSpacing = 0;
  text_4228_401.lineHeight = { unit: "PERCENT", value: 150 };
  text_4228_401.textAutoResize = "WIDTH_AND_HEIGHT";
};

const createFAQs = async () => {
  // Load FONTS
  async function loadFonts() {
    await Promise.all([
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
  var frame_4228_465 = figma.createFrame();
  figma.currentPage.appendChild(frame_4228_465);
  frame_4228_465.resize(1440.0, 1054.0);
  frame_4228_465.fillStyleId = white_77ad.id;
  frame_4228_465.backgroundStyleId = white_77ad.id;
  frame_4228_465.name = "FAQ / 1 /";
  frame_4228_465.relativeTransform = [
    [1, 0, 1831],
    [0, 1, 0],
  ];
  frame_4228_465.x = 1831;
  frame_4228_465.paddingLeft = 64;
  frame_4228_465.paddingRight = 64;
  frame_4228_465.paddingTop = 112;
  frame_4228_465.paddingBottom = 112;
  frame_4228_465.counterAxisAlignItems = "CENTER";
  frame_4228_465.primaryAxisSizingMode = "FIXED";
  frame_4228_465.strokeTopWeight = 1;
  frame_4228_465.strokeBottomWeight = 1;
  frame_4228_465.strokeLeftWeight = 1;
  frame_4228_465.strokeRightWeight = 1;
  frame_4228_465.layoutMode = "VERTICAL";
  frame_4228_465.itemSpacing = 80;

  // Create FRAME
  var frame_4228_466 = figma.createFrame();
  frame_4228_465.appendChild(frame_4228_466);
  frame_4228_466.resize(768.0, 564.0);
  frame_4228_466.primaryAxisSizingMode = "AUTO";
  frame_4228_466.name = "Container";
  frame_4228_466.relativeTransform = [
    [1, 0, 336],
    [0, 1, 112],
  ];
  frame_4228_466.x = 336;
  frame_4228_466.y = 112;
  frame_4228_466.fills = [];
  frame_4228_466.counterAxisAlignItems = "CENTER";
  frame_4228_466.strokeTopWeight = 1;
  frame_4228_466.strokeBottomWeight = 1;
  frame_4228_466.strokeLeftWeight = 1;
  frame_4228_466.strokeRightWeight = 1;
  frame_4228_466.clipsContent = false;
  frame_4228_466.itemSpacing = 80;

  // Create FRAME
  var frame_4228_467 = figma.createFrame();
  frame_4228_466.appendChild(frame_4228_467);
  frame_4228_467.resize(768.0, 109.0);
  frame_4228_467.primaryAxisSizingMode = "AUTO";
  frame_4228_467.name = "Section Title";
  frame_4228_467.fills = [];
  frame_4228_467.counterAxisAlignItems = "CENTER";
  frame_4228_467.strokeTopWeight = 1;
  frame_4228_467.strokeBottomWeight = 1;
  frame_4228_467.strokeLeftWeight = 1;
  frame_4228_467.strokeRightWeight = 1;
  frame_4228_467.clipsContent = false;
  frame_4228_467.expanded = false;
  frame_4228_467.itemSpacing = 24;

  // Create TEXT
  var text_4228_468 = figma.createText();
  frame_4228_467.appendChild(text_4228_468);
  text_4228_468.fillStyleId = black_4902.id;
  text_4228_468.resize(156.0, 96.0);
  text_4228_468.name = "Heading";
  text_4228_468.relativeTransform = [
    [1, 0, 306],
    [0, 1, -15],
  ];
  text_4228_468.x = 306;
  text_4228_468.y = -15;
  text_4228_468.layoutAlign = "STRETCH";
  text_4228_468.autoRename = false;

  // Font properties
  text_4228_468.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_4228_468.characters = "FAQs";
  text_4228_468.fontSize = 64;
  text_4228_468.listSpacing = 0;
  text_4228_468.lineHeight = { unit: "PERCENT", value: 150 };
  text_4228_468.fontName = { family: "Roboto", style: "Bold" };
  text_4228_468.textAutoResize = "HEIGHT";

  // Create TEXT
  var text_4228_469 = figma.createText();
  frame_4228_466.appendChild(text_4228_469);
  text_4228_469.fillStyleId = black_4902.id;
  text_4228_469.resize(669.0, 26.0);
  text_4228_469.relativeTransform = [
    [1, 0, 49],
    [0, 1, 125],
  ];
  text_4228_469.x = 49;
  text_4228_469.y = 125;
  text_4228_469.autoRename = false;

  // Font properties
  text_4228_469.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4228_469.characters =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros ";
  text_4228_469.fontSize = 17;
  text_4228_469.listSpacing = 0;
  text_4228_469.lineHeight = { unit: "PERCENT", value: 150 };
  text_4228_469.textAutoResize = "HEIGHT";

  // Create FRAME
  var frame_4229_1004 = figma.createFrame();
  frame_4228_466.appendChild(frame_4229_1004);
  frame_4229_1004.resize(768.0, 375.0);
  frame_4229_1004.primaryAxisSizingMode = "AUTO";
  frame_4229_1004.counterAxisSizingMode = "AUTO";
  frame_4229_1004.name = "Accordion";
  frame_4229_1004.relativeTransform = [
    [1, 0, 0],
    [0, 1, 242],
  ];
  frame_4229_1004.y = 242;
  frame_4229_1004.fills = [];
  frame_4229_1004.paddingLeft = 2;
  frame_4229_1004.paddingRight = 2;
  frame_4229_1004.counterAxisAlignItems = "CENTER";
  frame_4229_1004.strokeTopWeight = 1;
  frame_4229_1004.strokeBottomWeight = 1;
  frame_4229_1004.strokeLeftWeight = 1;
  frame_4229_1004.strokeRightWeight = 1;
  frame_4229_1004.clipsContent = false;
  frame_4229_1004.expanded = false;
  frame_4229_1004.counterAxisSizingMode = "AUTO";
  frame_4229_1004.itemSpacing = 24;

  // Create LINE
  var line_4229_1007 = figma.createLine();
  frame_4229_1004.appendChild(line_4229_1007);
  line_4229_1007.resizeWithoutConstraints(764.0, 0);
  line_4229_1007.name = "Line 1";
  line_4229_1007.strokes = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 0, g: 0, b: 0 },
      boundVariables: {},
    },
  ];
  line_4229_1007.relativeTransform = [
    [1, 0, 2],
    [0, 1, 0],
  ];
  line_4229_1007.x = 2;
  line_4229_1007.constrainProportions = true;

  // Create TEXT
  var text_4229_1013 = figma.createText();
  frame_4229_1004.appendChild(text_4229_1013);
  text_4229_1013.resize(182.0, 26.0);
  text_4229_1013.name = "Question text goes here";
  text_4229_1013.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 0, g: 0, b: 0 },
      boundVariables: {},
    },
  ];
  text_4229_1013.relativeTransform = [
    [1, 0, 2],
    [0, 1, 24],
  ];
  text_4229_1013.x = 2;
  text_4229_1013.y = 24;

  // Font properties
  text_4229_1013.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_4229_1013.characters = "Question text goes here";
  text_4229_1013.fontSize = 17;
  text_4229_1013.listSpacing = 0;
  text_4229_1013.lineHeight = { unit: "PERCENT", value: 150 };
  text_4229_1013.fontName = { family: "Roboto", style: "Bold" };
  text_4229_1013.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create LINE
  var line_4229_1008 = figma.createLine();
  frame_4229_1004.appendChild(line_4229_1008);
  line_4229_1008.resizeWithoutConstraints(764.0, 0);
  line_4229_1008.name = "Line 2";
  line_4229_1008.strokes = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 0, g: 0, b: 0 },
      boundVariables: {},
    },
  ];
  line_4229_1008.relativeTransform = [
    [1, 0, 2],
    [0, 1, 75],
  ];
  line_4229_1008.x = 2;
  line_4229_1008.y = 75;
  line_4229_1008.constrainProportions = true;

  // Create TEXT
  var text_4229_1015 = figma.createText();
  frame_4229_1004.appendChild(text_4229_1015);
  text_4229_1015.resize(182.0, 26.0);
  text_4229_1015.name = "Question text goes here";
  text_4229_1015.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 0, g: 0, b: 0 },
      boundVariables: {},
    },
  ];
  text_4229_1015.relativeTransform = [
    [1, 0, 2],
    [0, 1, 99],
  ];
  text_4229_1015.x = 2;
  text_4229_1015.y = 99;

  // Font properties
  text_4229_1015.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_4229_1015.characters = "Question text goes here";
  text_4229_1015.fontSize = 17;
  text_4229_1015.listSpacing = 0;
  text_4229_1015.lineHeight = { unit: "PERCENT", value: 150 };
  text_4229_1015.fontName = { family: "Roboto", style: "Bold" };
  text_4229_1015.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create LINE
  var line_4229_1009 = figma.createLine();
  frame_4229_1004.appendChild(line_4229_1009);
  line_4229_1009.resizeWithoutConstraints(764.0, 0);
  line_4229_1009.name = "Line 3";
  line_4229_1009.strokes = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 0, g: 0, b: 0 },
      boundVariables: {},
    },
  ];
  line_4229_1009.relativeTransform = [
    [1, 0, 2],
    [0, 1, 150],
  ];
  line_4229_1009.x = 2;
  line_4229_1009.y = 150;
  line_4229_1009.constrainProportions = true;

  // Create TEXT
  var text_4229_1016 = figma.createText();
  frame_4229_1004.appendChild(text_4229_1016);
  text_4229_1016.resize(182.0, 26.0);
  text_4229_1016.name = "Question text goes here";
  text_4229_1016.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 0, g: 0, b: 0 },
      boundVariables: {},
    },
  ];
  text_4229_1016.relativeTransform = [
    [1, 0, 2],
    [0, 1, 174],
  ];
  text_4229_1016.x = 2;
  text_4229_1016.y = 174;

  // Font properties
  text_4229_1016.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_4229_1016.characters = "Question text goes here";
  text_4229_1016.fontSize = 17;
  text_4229_1016.listSpacing = 0;
  text_4229_1016.lineHeight = { unit: "PERCENT", value: 150 };
  text_4229_1016.fontName = { family: "Roboto", style: "Bold" };
  text_4229_1016.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create LINE
  var line_4229_1010 = figma.createLine();
  frame_4229_1004.appendChild(line_4229_1010);
  line_4229_1010.resizeWithoutConstraints(764.0, 0);
  line_4229_1010.name = "Line 4";
  line_4229_1010.strokes = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 0, g: 0, b: 0 },
      boundVariables: {},
    },
  ];
  line_4229_1010.relativeTransform = [
    [1, 0, 2],
    [0, 1, 225],
  ];
  line_4229_1010.x = 2;
  line_4229_1010.y = 225;
  line_4229_1010.constrainProportions = true;

  // Create TEXT
  var text_4229_1017 = figma.createText();
  frame_4229_1004.appendChild(text_4229_1017);
  text_4229_1017.resize(182.0, 26.0);
  text_4229_1017.name = "Question text goes here";
  text_4229_1017.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 0, g: 0, b: 0 },
      boundVariables: {},
    },
  ];
  text_4229_1017.relativeTransform = [
    [1, 0, 2],
    [0, 1, 249],
  ];
  text_4229_1017.x = 2;
  text_4229_1017.y = 249;

  // Font properties
  text_4229_1017.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_4229_1017.characters = "Question text goes here";
  text_4229_1017.fontSize = 17;
  text_4229_1017.listSpacing = 0;
  text_4229_1017.lineHeight = { unit: "PERCENT", value: 150 };
  text_4229_1017.fontName = { family: "Roboto", style: "Bold" };
  text_4229_1017.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create LINE
  var line_4229_1011 = figma.createLine();
  frame_4229_1004.appendChild(line_4229_1011);
  line_4229_1011.resizeWithoutConstraints(764.0, 0);
  line_4229_1011.name = "Line 5";
  line_4229_1011.strokes = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 0, g: 0, b: 0 },
      boundVariables: {},
    },
  ];
  line_4229_1011.relativeTransform = [
    [1, 0, 2],
    [0, 1, 300],
  ];
  line_4229_1011.x = 2;
  line_4229_1011.y = 300;
  line_4229_1011.constrainProportions = true;

  // Create TEXT
  var text_4229_1018 = figma.createText();
  frame_4229_1004.appendChild(text_4229_1018);
  text_4229_1018.resize(182.0, 26.0);
  text_4229_1018.name = "Question text goes here";
  text_4229_1018.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 0, g: 0, b: 0 },
      boundVariables: {},
    },
  ];
  text_4229_1018.relativeTransform = [
    [1, 0, 2],
    [0, 1, 324],
  ];
  text_4229_1018.x = 2;
  text_4229_1018.y = 324;

  // Font properties
  text_4229_1018.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_4229_1018.characters = "Question text goes here";
  text_4229_1018.fontSize = 17;
  text_4229_1018.listSpacing = 0;
  text_4229_1018.lineHeight = { unit: "PERCENT", value: 150 };
  text_4229_1018.fontName = { family: "Roboto", style: "Bold" };
  text_4229_1018.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create LINE
  var line_4229_1012 = figma.createLine();
  frame_4229_1004.appendChild(line_4229_1012);
  line_4229_1012.resizeWithoutConstraints(764.0, 0);
  line_4229_1012.name = "Line 6";
  line_4229_1012.strokes = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 0, g: 0, b: 0 },
      boundVariables: {},
    },
  ];
  line_4229_1012.relativeTransform = [
    [1, 0, 2],
    [0, 1, 375],
  ];
  line_4229_1012.x = 2;
  line_4229_1012.y = 375;
  line_4229_1012.constrainProportions = true;

  // Create FRAME
  var frame_4230_1022 = figma.createFrame();
  frame_4228_465.appendChild(frame_4230_1022);
  frame_4230_1022.resize(768.0, 564.0);
  frame_4230_1022.primaryAxisSizingMode = "AUTO";
  frame_4230_1022.name = "Container";
  frame_4230_1022.relativeTransform = [
    [1, 0, 336],
    [0, 1, 756],
  ];
  frame_4230_1022.x = 336;
  frame_4230_1022.y = 756;
  frame_4230_1022.fills = [];
  frame_4230_1022.counterAxisAlignItems = "CENTER";
  frame_4230_1022.strokeTopWeight = 1;
  frame_4230_1022.strokeBottomWeight = 1;
  frame_4230_1022.strokeLeftWeight = 1;
  frame_4230_1022.strokeRightWeight = 1;
  frame_4230_1022.clipsContent = false;
  frame_4230_1022.itemSpacing = 80;

  // Create FRAME
  var frame_4230_1025 = figma.createFrame();
  frame_4230_1022.appendChild(frame_4230_1025);
  frame_4230_1025.resize(768.0, 109.0);
  frame_4230_1025.primaryAxisSizingMode = "AUTO";
  frame_4230_1025.name = "Section Title";
  frame_4230_1025.relativeTransform = [
    [1, 0, 0],
    [0, 1, 42],
  ];
  frame_4230_1025.y = 42;
  frame_4230_1025.fills = [];
  frame_4230_1025.counterAxisAlignItems = "CENTER";
  frame_4230_1025.strokeTopWeight = 1;
  frame_4230_1025.strokeBottomWeight = 1;
  frame_4230_1025.strokeLeftWeight = 1;
  frame_4230_1025.strokeRightWeight = 1;
  frame_4230_1025.clipsContent = false;
  frame_4230_1025.itemSpacing = 24;

  // Create TEXT
  var text_4230_1026 = figma.createText();
  frame_4230_1025.appendChild(text_4230_1026);
  text_4230_1026.fillStyleId = black_4902.id;
  text_4230_1026.resize(382.0, 288.0);
  text_4230_1026.name = "Heading";
  text_4230_1026.relativeTransform = [
    [1, 0, 193],
    [0, 1, 0],
  ];
  text_4230_1026.x = 193;
  text_4230_1026.layoutAlign = "STRETCH";
  text_4230_1026.autoRename = false;

  // Font properties
  text_4230_1026.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_4230_1026.characters = "Still have a question?";
  text_4230_1026.fontSize = 36;
  text_4230_1026.listSpacing = 0;
  text_4230_1026.lineHeight = { unit: "PERCENT", value: 150 };
  text_4230_1026.fontName = { family: "Roboto", style: "Bold" };
  text_4230_1026.textAutoResize = "NONE";

  // Create TEXT
  var text_4230_1027 = figma.createText();
  frame_4230_1022.appendChild(text_4230_1027);
  text_4230_1027.fillStyleId = black_4902.id;
  text_4230_1027.resize(418.0, 26.0);
  text_4230_1027.relativeTransform = [
    [1, 0, 175],
    [0, 1, 110],
  ];
  text_4230_1027.x = 175;
  text_4230_1027.y = 110;
  text_4230_1027.autoRename = false;

  // Font properties
  text_4230_1027.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4230_1027.characters =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit ";
  text_4230_1027.fontSize = 17;
  text_4230_1027.listSpacing = 0;
  text_4230_1027.lineHeight = { unit: "PERCENT", value: 150 };
  text_4230_1027.textAutoResize = "HEIGHT";

  // Create RECTANGLE
  var rectangle_4231_1040 = figma.createRectangle();
  frame_4230_1022.appendChild(rectangle_4231_1040);
  rectangle_4231_1040.resize(100.0, 43.0);
  rectangle_4231_1040.name = "Rectangle 1";
  rectangle_4231_1040.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 1, g: 1, b: 1 },
      boundVariables: {},
    },
  ];
  rectangle_4231_1040.strokes = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 0, g: 0, b: 0 },
      boundVariables: {},
    },
  ];
  rectangle_4231_1040.relativeTransform = [
    [1, 0, 334],
    [0, 1, 164],
  ];
  rectangle_4231_1040.x = 334;
  rectangle_4231_1040.y = 164;
  rectangle_4231_1040.strokeTopWeight = 1;
  rectangle_4231_1040.strokeBottomWeight = 1;
  rectangle_4231_1040.strokeLeftWeight = 1;
  rectangle_4231_1040.strokeRightWeight = 1;

  // Create TEXT
  var text_4231_1041 = figma.createText();
  frame_4230_1022.appendChild(text_4231_1041);
  text_4231_1041.resize(56.0, 24.0);
  text_4231_1041.name = "Contact";
  text_4231_1041.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 0, g: 0, b: 0 },
      boundVariables: {},
    },
  ];
  text_4231_1041.relativeTransform = [
    [1, 0, 356],
    [0, 1, 174],
  ];
  text_4231_1041.x = 356;
  text_4231_1041.y = 174;

  // Font properties
  text_4231_1041.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4231_1041.characters = "Contact";
  text_4231_1041.fontSize = 16;
  text_4231_1041.listSpacing = 0;
  text_4231_1041.lineHeight = { unit: "PERCENT", value: 150 };
  text_4231_1041.textAutoResize = "WIDTH_AND_HEIGHT";
};

const createPricing = async () => {
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
};

const createTestimonial = async () => {
  // Load FONTS
  async function loadFonts() {
    await Promise.all([
      figma.loadFontAsync({
        family: "Roboto",
        style: "Bold",
      }),
      figma.loadFontAsync({
        family: "Roboto",
        style: "Regular",
      }),
      figma.loadFontAsync({
        family: "Roboto",
        style: "SemiBold",
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
  var frame_4239_154 = figma.createFrame();
  figma.currentPage.appendChild(frame_4239_154);
  frame_4239_154.resize(1440.0, 741.0);
  frame_4239_154.primaryAxisSizingMode = "AUTO";
  frame_4239_154.fillStyleId = white_77ad.id;
  frame_4239_154.backgroundStyleId = white_77ad.id;
  frame_4239_154.name = "Testimonial / 3 /";
  frame_4239_154.relativeTransform = [
    [1, 0, 3270],
    [0, 1, 1571],
  ];
  frame_4239_154.x = 3270;
  frame_4239_154.y = 1571;
  frame_4239_154.paddingLeft = 64;
  frame_4239_154.paddingRight = 64;
  frame_4239_154.paddingTop = 81;
  frame_4239_154.paddingBottom = 112;
  frame_4239_154.counterAxisAlignItems = "CENTER";
  frame_4239_154.strokeTopWeight = 1;
  frame_4239_154.strokeBottomWeight = 1;
  frame_4239_154.strokeLeftWeight = 1;
  frame_4239_154.strokeRightWeight = 1;
  frame_4239_154.itemSpacing = 18;

  // Create TEXT
  var text_4239_155 = figma.createText();
  frame_4239_154.appendChild(text_4239_155);
  text_4239_155.fillStyleId = black_4902.id;
  text_4239_155.resize(491.0, 72.0);
  text_4239_155.name = "Heading";
  text_4239_155.relativeTransform = [
    [1, 0, 474.5],
    [0, 1, 81],
  ];
  text_4239_155.x = 474.5;
  text_4239_155.y = 81;
  text_4239_155.autoRename = false;

  // Font properties
  text_4239_155.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_4239_155.characters = "Customer testimonials";
  text_4239_155.fontSize = 48;
  text_4239_155.listSpacing = 0;
  text_4239_155.lineHeight = { unit: "PERCENT", value: 150 };
  text_4239_155.fontName = { family: "Roboto", style: "Bold" };
  text_4239_155.textAutoResize = "HEIGHT";

  // Create TEXT
  var text_4239_156 = figma.createText();
  frame_4239_154.appendChild(text_4239_156);
  text_4239_156.fillStyleId = black_4902.id;
  text_4239_156.resize(422.0, 26.0);
  text_4239_156.relativeTransform = [
    [1, 0, 509],
    [0, 1, 171],
  ];
  text_4239_156.x = 509;
  text_4239_156.y = 171;
  text_4239_156.autoRename = false;

  // Font properties
  text_4239_156.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4239_156.characters =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  text_4239_156.fontSize = 17;
  text_4239_156.listSpacing = 0;
  text_4239_156.lineHeight = { unit: "PERCENT", value: 150 };
  text_4239_156.textAutoResize = "HEIGHT";

  // Create FRAME
  var frame_4239_157 = figma.createFrame();
  frame_4239_154.appendChild(frame_4239_157);
  frame_4239_157.resize(401.0, 340.0);
  frame_4239_157.counterAxisSizingMode = "AUTO";
  frame_4239_157.name = "Content";
  frame_4239_157.relativeTransform = [
    [1, 0, 74],
    [0, 1, 289],
  ];
  frame_4239_157.x = 74;
  frame_4239_157.y = 289;
  frame_4239_157.fills = [];
  frame_4239_157.primaryAxisAlignItems = "CENTER";
  frame_4239_157.primaryAxisSizingMode = "FIXED";
  frame_4239_157.strokeTopWeight = 1;
  frame_4239_157.strokeBottomWeight = 1;
  frame_4239_157.strokeLeftWeight = 1;
  frame_4239_157.strokeRightWeight = 1;
  frame_4239_157.clipsContent = false;
  frame_4239_157.counterAxisSizingMode = "AUTO";
  frame_4239_157.itemSpacing = 48;

  // Create FRAME
  var frame_4239_158 = figma.createFrame();
  frame_4239_157.appendChild(frame_4239_158);
  frame_4239_158.resize(401.0, 338.0);
  frame_4239_158.primaryAxisSizingMode = "AUTO";
  frame_4239_158.name = "Column";
  frame_4239_158.layoutGrow = 1;
  frame_4239_158.fills = [];
  frame_4239_158.counterAxisAlignItems = "CENTER";
  frame_4239_158.strokeTopWeight = 1;
  frame_4239_158.strokeBottomWeight = 1;
  frame_4239_158.strokeLeftWeight = 1;
  frame_4239_158.strokeRightWeight = 1;
  frame_4239_158.layoutMode = "VERTICAL";
  frame_4239_158.itemSpacing = 24;

  // Create TEXT
  var text_4239_159 = figma.createText();
  frame_4239_158.appendChild(text_4239_159);
  text_4239_159.resize(103.0, 60.0);
  text_4239_159.name = "LOGO";
  text_4239_159.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 0, g: 0, b: 0 },
      boundVariables: {},
    },
  ];
  text_4239_159.relativeTransform = [
    [1, 0, 149],
    [0, 1, 0],
  ];
  text_4239_159.x = 149;

  // Font properties
  text_4239_159.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_4239_159.characters = "LOGO";
  text_4239_159.fontSize = 40;
  text_4239_159.listSpacing = 0;
  text_4239_159.lineHeight = { unit: "PERCENT", value: 150 };
  text_4239_159.fontName = { family: "Roboto", style: "Bold" };
  text_4239_159.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create TEXT
  var text_4239_160 = figma.createText();
  frame_4239_158.appendChild(text_4239_160);
  text_4239_160.fillStyleId = black_4902.id;
  text_4239_160.resize(401.0, 90.0);
  text_4239_160.name = "Quote";
  text_4239_160.relativeTransform = [
    [1, 0, 0],
    [0, 1, 84],
  ];
  text_4239_160.y = 84;
  text_4239_160.autoRename = false;

  // Font properties
  text_4239_160.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_4239_160.characters =
    '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus in len ';
  text_4239_160.fontSize = 20;
  text_4239_160.listSpacing = 0;
  text_4239_160.lineHeight = { unit: "PERCENT", value: 150 };
  text_4239_160.fontName = { family: "Roboto", style: "Bold" };
  text_4239_160.textAutoResize = "HEIGHT";

  // Create ELLIPSE
  var ellipse_4239_186 = figma.createEllipse();
  frame_4239_158.appendChild(ellipse_4239_186);
  ellipse_4239_186.resize(64.0, 64.0);
  ellipse_4239_186.name = "Ellipse 1";
  ellipse_4239_186.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        r: 0.8509804010391235,
        g: 0.8509804010391235,
        b: 0.8509804010391235,
      },
      boundVariables: {},
    },
  ];
  ellipse_4239_186.relativeTransform = [
    [1, 0, 168.5],
    [0, 1, 198],
  ];
  ellipse_4239_186.x = 168.5;
  ellipse_4239_186.y = 198;
  ellipse_4239_186.constrainProportions = true;

  // Create FRAME
  var frame_4239_161 = figma.createFrame();
  frame_4239_158.appendChild(frame_4239_161);
  frame_4239_161.resize(300.0, 52.0);
  frame_4239_161.primaryAxisSizingMode = "AUTO";
  frame_4239_161.name = "Avatar";
  frame_4239_161.relativeTransform = [
    [1, 0, 50.5],
    [0, 1, 286],
  ];
  frame_4239_161.x = 50.5;
  frame_4239_161.y = 286;
  frame_4239_161.fills = [];
  frame_4239_161.counterAxisAlignItems = "CENTER";
  frame_4239_161.strokeTopWeight = 1;
  frame_4239_161.strokeBottomWeight = 1;
  frame_4239_161.strokeLeftWeight = 1;
  frame_4239_161.strokeRightWeight = 1;
  frame_4239_161.clipsContent = false;
  frame_4239_161.layoutMode = "VERTICAL";
  frame_4239_161.itemSpacing = 16;

  // Create FRAME
  var frame_4239_163 = figma.createFrame();
  frame_4239_161.appendChild(frame_4239_163);
  frame_4239_163.resize(189.0, 52.0);
  frame_4239_163.primaryAxisSizingMode = "AUTO";
  frame_4239_163.name = "Avatar Content";
  frame_4239_163.relativeTransform = [
    [1, 0, 55.5],
    [0, 1, 0],
  ];
  frame_4239_163.x = 55.5;
  frame_4239_163.fills = [];
  frame_4239_163.strokeTopWeight = 1;
  frame_4239_163.strokeBottomWeight = 1;
  frame_4239_163.strokeLeftWeight = 1;
  frame_4239_163.strokeRightWeight = 1;
  frame_4239_163.clipsContent = false;

  // Create TEXT
  var text_4239_164 = figma.createText();
  frame_4239_163.appendChild(text_4239_164);
  text_4239_164.fillStyleId = black_4902.id;
  text_4239_164.resize(120.0, 26.0);
  text_4239_164.relativeTransform = [
    [1, 0, 35],
    [0, 1, 0],
  ];
  text_4239_164.x = 35;
  text_4239_164.autoRename = false;

  // Font properties
  text_4239_164.fontName = {
    family: "Roboto",
    style: "SemiBold",
  };
  text_4239_164.characters = "Name Surname";
  text_4239_164.fontSize = 17;
  text_4239_164.listSpacing = 0;
  text_4239_164.lineHeight = { unit: "PERCENT", value: 150 };
  text_4239_164.fontName = { family: "Roboto", style: "SemiBold" };
  text_4239_164.textAutoResize = "HEIGHT";

  // Create TEXT
  var text_4239_165 = figma.createText();
  frame_4239_163.appendChild(text_4239_165);
  text_4239_165.fillStyleId = black_4902.id;
  text_4239_165.resize(189.0, 26.0);
  text_4239_165.relativeTransform = [
    [1, 0, 0],
    [0, 1, 26],
  ];
  text_4239_165.y = 26;
  text_4239_165.layoutAlign = "STRETCH";
  text_4239_165.autoRename = false;

  // Font properties
  text_4239_165.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4239_165.characters = "Position, Company name";
  text_4239_165.fontSize = 17;
  text_4239_165.listSpacing = 0;
  text_4239_165.lineHeight = { unit: "PERCENT", value: 150 };
  text_4239_165.textAutoResize = "HEIGHT";

  // Create FRAME
  var frame_4240_187 = figma.createFrame();
  frame_4239_154.appendChild(frame_4240_187);
  frame_4240_187.resize(401.0, 340.0);
  frame_4240_187.counterAxisSizingMode = "AUTO";
  frame_4240_187.name = "Content";
  frame_4240_187.relativeTransform = [
    [1, 0, 519],
    [0, 1, 289],
  ];
  frame_4240_187.x = 519;
  frame_4240_187.y = 289;
  frame_4240_187.fills = [];
  frame_4240_187.primaryAxisAlignItems = "CENTER";
  frame_4240_187.primaryAxisSizingMode = "FIXED";
  frame_4240_187.strokeTopWeight = 1;
  frame_4240_187.strokeBottomWeight = 1;
  frame_4240_187.strokeLeftWeight = 1;
  frame_4240_187.strokeRightWeight = 1;
  frame_4240_187.clipsContent = false;
  frame_4240_187.expanded = false;
  frame_4240_187.counterAxisSizingMode = "AUTO";
  frame_4240_187.itemSpacing = 48;

  // Create FRAME
  var frame_4240_188 = figma.createFrame();
  frame_4240_187.appendChild(frame_4240_188);
  frame_4240_188.resize(401.0, 338.0);
  frame_4240_188.primaryAxisSizingMode = "AUTO";
  frame_4240_188.name = "Column";
  frame_4240_188.layoutGrow = 1;
  frame_4240_188.fills = [];
  frame_4240_188.counterAxisAlignItems = "CENTER";
  frame_4240_188.strokeTopWeight = 1;
  frame_4240_188.strokeBottomWeight = 1;
  frame_4240_188.strokeLeftWeight = 1;
  frame_4240_188.strokeRightWeight = 1;
  frame_4240_188.layoutMode = "VERTICAL";
  frame_4240_188.itemSpacing = 24;

  // Create TEXT
  var text_4240_189 = figma.createText();
  frame_4240_188.appendChild(text_4240_189);
  text_4240_189.resize(103.0, 60.0);
  text_4240_189.name = "LOGO";
  text_4240_189.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 0, g: 0, b: 0 },
      boundVariables: {},
    },
  ];
  text_4240_189.relativeTransform = [
    [1, 0, 149],
    [0, 1, 0],
  ];
  text_4240_189.x = 149;

  // Font properties
  text_4240_189.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_4240_189.characters = "LOGO";
  text_4240_189.fontSize = 40;
  text_4240_189.listSpacing = 0;
  text_4240_189.lineHeight = { unit: "PERCENT", value: 150 };
  text_4240_189.fontName = { family: "Roboto", style: "Bold" };
  text_4240_189.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create TEXT
  var text_4240_190 = figma.createText();
  frame_4240_188.appendChild(text_4240_190);
  text_4240_190.fillStyleId = black_4902.id;
  text_4240_190.resize(401.0, 90.0);
  text_4240_190.name = "Quote";
  text_4240_190.relativeTransform = [
    [1, 0, 0],
    [0, 1, 84],
  ];
  text_4240_190.y = 84;
  text_4240_190.autoRename = false;

  // Font properties
  text_4240_190.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_4240_190.characters =
    '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus in len ';
  text_4240_190.fontSize = 20;
  text_4240_190.listSpacing = 0;
  text_4240_190.lineHeight = { unit: "PERCENT", value: 150 };
  text_4240_190.fontName = { family: "Roboto", style: "Bold" };
  text_4240_190.textAutoResize = "HEIGHT";

  // Create ELLIPSE
  var ellipse_4240_191 = figma.createEllipse();
  frame_4240_188.appendChild(ellipse_4240_191);
  ellipse_4240_191.resize(64.0, 64.0);
  ellipse_4240_191.name = "Ellipse 1";
  ellipse_4240_191.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        r: 0.8509804010391235,
        g: 0.8509804010391235,
        b: 0.8509804010391235,
      },
      boundVariables: {},
    },
  ];
  ellipse_4240_191.relativeTransform = [
    [1, 0, 168.5],
    [0, 1, 198],
  ];
  ellipse_4240_191.x = 168.5;
  ellipse_4240_191.y = 198;
  ellipse_4240_191.constrainProportions = true;

  // Create FRAME
  var frame_4240_192 = figma.createFrame();
  frame_4240_188.appendChild(frame_4240_192);
  frame_4240_192.resize(300.0, 52.0);
  frame_4240_192.primaryAxisSizingMode = "AUTO";
  frame_4240_192.name = "Avatar";
  frame_4240_192.relativeTransform = [
    [1, 0, 50.5],
    [0, 1, 286],
  ];
  frame_4240_192.x = 50.5;
  frame_4240_192.y = 286;
  frame_4240_192.fills = [];
  frame_4240_192.counterAxisAlignItems = "CENTER";
  frame_4240_192.strokeTopWeight = 1;
  frame_4240_192.strokeBottomWeight = 1;
  frame_4240_192.strokeLeftWeight = 1;
  frame_4240_192.strokeRightWeight = 1;
  frame_4240_192.clipsContent = false;
  frame_4240_192.layoutMode = "VERTICAL";
  frame_4240_192.itemSpacing = 16;

  // Create FRAME
  var frame_4240_193 = figma.createFrame();
  frame_4240_192.appendChild(frame_4240_193);
  frame_4240_193.resize(189.0, 52.0);
  frame_4240_193.primaryAxisSizingMode = "AUTO";
  frame_4240_193.name = "Avatar Content";
  frame_4240_193.relativeTransform = [
    [1, 0, 55.5],
    [0, 1, 0],
  ];
  frame_4240_193.x = 55.5;
  frame_4240_193.fills = [];
  frame_4240_193.strokeTopWeight = 1;
  frame_4240_193.strokeBottomWeight = 1;
  frame_4240_193.strokeLeftWeight = 1;
  frame_4240_193.strokeRightWeight = 1;
  frame_4240_193.clipsContent = false;

  // Create TEXT
  var text_4240_194 = figma.createText();
  frame_4240_193.appendChild(text_4240_194);
  text_4240_194.fillStyleId = black_4902.id;
  text_4240_194.resize(120.0, 26.0);
  text_4240_194.relativeTransform = [
    [1, 0, 35],
    [0, 1, 0],
  ];
  text_4240_194.x = 35;
  text_4240_194.autoRename = false;

  // Font properties
  text_4240_194.fontName = {
    family: "Roboto",
    style: "SemiBold",
  };
  text_4240_194.characters = "Name Surname";
  text_4240_194.fontSize = 17;
  text_4240_194.listSpacing = 0;
  text_4240_194.lineHeight = { unit: "PERCENT", value: 150 };
  text_4240_194.fontName = { family: "Roboto", style: "SemiBold" };
  text_4240_194.textAutoResize = "HEIGHT";

  // Create TEXT
  var text_4240_195 = figma.createText();
  frame_4240_193.appendChild(text_4240_195);
  text_4240_195.fillStyleId = black_4902.id;
  text_4240_195.resize(189.0, 26.0);
  text_4240_195.relativeTransform = [
    [1, 0, 0],
    [0, 1, 26],
  ];
  text_4240_195.y = 26;
  text_4240_195.layoutAlign = "STRETCH";
  text_4240_195.autoRename = false;

  // Font properties
  text_4240_195.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4240_195.characters = "Position, Company name";
  text_4240_195.fontSize = 17;
  text_4240_195.listSpacing = 0;
  text_4240_195.lineHeight = { unit: "PERCENT", value: 150 };
  text_4240_195.textAutoResize = "HEIGHT";

  // Create FRAME
  var frame_4240_196 = figma.createFrame();
  frame_4239_154.appendChild(frame_4240_196);
  frame_4240_196.resize(401.0, 340.0);
  frame_4240_196.counterAxisSizingMode = "AUTO";
  frame_4240_196.name = "Content";
  frame_4240_196.relativeTransform = [
    [1, 0, 964],
    [0, 1, 289],
  ];
  frame_4240_196.x = 964;
  frame_4240_196.y = 289;
  frame_4240_196.fills = [];
  frame_4240_196.primaryAxisAlignItems = "CENTER";
  frame_4240_196.primaryAxisSizingMode = "FIXED";
  frame_4240_196.strokeTopWeight = 1;
  frame_4240_196.strokeBottomWeight = 1;
  frame_4240_196.strokeLeftWeight = 1;
  frame_4240_196.strokeRightWeight = 1;
  frame_4240_196.clipsContent = false;
  frame_4240_196.expanded = false;
  frame_4240_196.counterAxisSizingMode = "AUTO";
  frame_4240_196.itemSpacing = 48;

  // Create FRAME
  var frame_4240_197 = figma.createFrame();
  frame_4240_196.appendChild(frame_4240_197);
  frame_4240_197.resize(401.0, 338.0);
  frame_4240_197.primaryAxisSizingMode = "AUTO";
  frame_4240_197.name = "Column";
  frame_4240_197.layoutGrow = 1;
  frame_4240_197.fills = [];
  frame_4240_197.counterAxisAlignItems = "CENTER";
  frame_4240_197.strokeTopWeight = 1;
  frame_4240_197.strokeBottomWeight = 1;
  frame_4240_197.strokeLeftWeight = 1;
  frame_4240_197.strokeRightWeight = 1;
  frame_4240_197.layoutMode = "VERTICAL";
  frame_4240_197.itemSpacing = 24;

  // Create TEXT
  var text_4240_198 = figma.createText();
  frame_4240_197.appendChild(text_4240_198);
  text_4240_198.resize(103.0, 60.0);
  text_4240_198.name = "LOGO";
  text_4240_198.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 0, g: 0, b: 0 },
      boundVariables: {},
    },
  ];
  text_4240_198.relativeTransform = [
    [1, 0, 149],
    [0, 1, 0],
  ];
  text_4240_198.x = 149;

  // Font properties
  text_4240_198.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_4240_198.characters = "LOGO";
  text_4240_198.fontSize = 40;
  text_4240_198.listSpacing = 0;
  text_4240_198.lineHeight = { unit: "PERCENT", value: 150 };
  text_4240_198.fontName = { family: "Roboto", style: "Bold" };
  text_4240_198.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create TEXT
  var text_4240_199 = figma.createText();
  frame_4240_197.appendChild(text_4240_199);
  text_4240_199.fillStyleId = black_4902.id;
  text_4240_199.resize(401.0, 90.0);
  text_4240_199.name = "Quote";
  text_4240_199.relativeTransform = [
    [1, 0, 0],
    [0, 1, 84],
  ];
  text_4240_199.y = 84;
  text_4240_199.autoRename = false;

  // Font properties
  text_4240_199.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_4240_199.characters =
    '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus in len ';
  text_4240_199.fontSize = 20;
  text_4240_199.listSpacing = 0;
  text_4240_199.lineHeight = { unit: "PERCENT", value: 150 };
  text_4240_199.fontName = { family: "Roboto", style: "Bold" };
  text_4240_199.textAutoResize = "HEIGHT";

  // Create ELLIPSE
  var ellipse_4240_200 = figma.createEllipse();
  frame_4240_197.appendChild(ellipse_4240_200);
  ellipse_4240_200.resize(64.0, 64.0);
  ellipse_4240_200.name = "Ellipse 1";
  ellipse_4240_200.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        r: 0.8509804010391235,
        g: 0.8509804010391235,
        b: 0.8509804010391235,
      },
      boundVariables: {},
    },
  ];
  ellipse_4240_200.relativeTransform = [
    [1, 0, 168.5],
    [0, 1, 198],
  ];
  ellipse_4240_200.x = 168.5;
  ellipse_4240_200.y = 198;
  ellipse_4240_200.constrainProportions = true;

  // Create FRAME
  var frame_4240_201 = figma.createFrame();
  frame_4240_197.appendChild(frame_4240_201);
  frame_4240_201.resize(300.0, 52.0);
  frame_4240_201.primaryAxisSizingMode = "AUTO";
  frame_4240_201.name = "Avatar";
  frame_4240_201.relativeTransform = [
    [1, 0, 50.5],
    [0, 1, 286],
  ];
  frame_4240_201.x = 50.5;
  frame_4240_201.y = 286;
  frame_4240_201.fills = [];
  frame_4240_201.counterAxisAlignItems = "CENTER";
  frame_4240_201.strokeTopWeight = 1;
  frame_4240_201.strokeBottomWeight = 1;
  frame_4240_201.strokeLeftWeight = 1;
  frame_4240_201.strokeRightWeight = 1;
  frame_4240_201.clipsContent = false;
  frame_4240_201.layoutMode = "VERTICAL";
  frame_4240_201.itemSpacing = 16;

  // Create FRAME
  var frame_4240_202 = figma.createFrame();
  frame_4240_201.appendChild(frame_4240_202);
  frame_4240_202.resize(189.0, 52.0);
  frame_4240_202.primaryAxisSizingMode = "AUTO";
  frame_4240_202.name = "Avatar Content";
  frame_4240_202.relativeTransform = [
    [1, 0, 55.5],
    [0, 1, 0],
  ];
  frame_4240_202.x = 55.5;
  frame_4240_202.fills = [];
  frame_4240_202.strokeTopWeight = 1;
  frame_4240_202.strokeBottomWeight = 1;
  frame_4240_202.strokeLeftWeight = 1;
  frame_4240_202.strokeRightWeight = 1;
  frame_4240_202.clipsContent = false;

  // Create TEXT
  var text_4240_203 = figma.createText();
  frame_4240_202.appendChild(text_4240_203);
  text_4240_203.fillStyleId = black_4902.id;
  text_4240_203.resize(120.0, 26.0);
  text_4240_203.relativeTransform = [
    [1, 0, 35],
    [0, 1, 0],
  ];
  text_4240_203.x = 35;
  text_4240_203.autoRename = false;

  // Font properties
  text_4240_203.fontName = {
    family: "Roboto",
    style: "SemiBold",
  };
  text_4240_203.characters = "Name Surname";
  text_4240_203.fontSize = 17;
  text_4240_203.listSpacing = 0;
  text_4240_203.lineHeight = { unit: "PERCENT", value: 150 };
  text_4240_203.fontName = { family: "Roboto", style: "SemiBold" };
  text_4240_203.textAutoResize = "HEIGHT";

  // Create TEXT
  var text_4240_204 = figma.createText();
  frame_4240_202.appendChild(text_4240_204);
  text_4240_204.fillStyleId = black_4902.id;
  text_4240_204.resize(189.0, 26.0);
  text_4240_204.relativeTransform = [
    [1, 0, 0],
    [0, 1, 26],
  ];
  text_4240_204.y = 26;
  text_4240_204.layoutAlign = "STRETCH";
  text_4240_204.autoRename = false;

  // Font properties
  text_4240_204.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4240_204.characters = "Position, Company name";
  text_4240_204.fontSize = 17;
  text_4240_204.listSpacing = 0;
  text_4240_204.lineHeight = { unit: "PERCENT", value: 150 };
  text_4240_204.textAutoResize = "HEIGHT";
};

const createLayout = async () => {
  // Load FONTS
  async function loadFonts() {
    await Promise.all([
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

  // Create FRAME
  var frame_4242_3191 = figma.createFrame();
  figma.currentPage.appendChild(frame_4242_3191);
  frame_4242_3191.resize(1440.0, 720.0);
  frame_4242_3191.primaryAxisSizingMode = "AUTO";
  frame_4242_3191.name = "Layout / 270 /";
  frame_4242_3191.relativeTransform = [
    [1, 0, 20350],
    [0, 1, 12260],
  ];
  frame_4242_3191.x = 20350;
  frame_4242_3191.y = 12260;
  frame_4242_3191.layoutGrow = 1;
  frame_4242_3191.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        r: 0.24705882370471954,
        g: 0.24705882370471954,
        b: 0.24705882370471954,
      },
      boundVariables: {},
    },
  ];
  frame_4242_3191.paddingLeft = 64;
  frame_4242_3191.paddingRight = 64;
  frame_4242_3191.paddingTop = 112;
  frame_4242_3191.paddingBottom = 112;
  frame_4242_3191.counterAxisAlignItems = "CENTER";
  frame_4242_3191.strokeTopWeight = 1;
  frame_4242_3191.strokeBottomWeight = 1;
  frame_4242_3191.strokeLeftWeight = 1;
  frame_4242_3191.strokeRightWeight = 1;
  frame_4242_3191.itemSpacing = 80;

  // Create TEXT
  var text_4242_3192 = figma.createText();
  frame_4242_3191.appendChild(text_4242_3192);
  text_4242_3192.fillStyleId = white_77ad.id;
  text_4242_3192.resize(742.0, 60.0);
  text_4242_3192.name = "Heading";
  text_4242_3192.relativeTransform = [
    [1, 0, 349],
    [0, 1, 112],
  ];
  text_4242_3192.x = 349;
  text_4242_3192.y = 112;
  text_4242_3192.autoRename = false;

  // Font properties
  text_4242_3192.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_4242_3192.characters = "Long heading is what you see here in this";
  text_4242_3192.fontSize = 40;
  text_4242_3192.listSpacing = 0;
  text_4242_3192.lineHeight = { unit: "PERCENT", value: 150 };
  text_4242_3192.fontName = { family: "Roboto", style: "Bold" };
  text_4242_3192.textAutoResize = "HEIGHT";

  // Create FRAME
  var frame_4242_3194 = figma.createFrame();
  frame_4242_3191.appendChild(frame_4242_3194);
  frame_4242_3194.resize(400.0, 346.0);
  frame_4242_3194.primaryAxisSizingMode = "AUTO";
  frame_4242_3194.name = "List Item";
  frame_4242_3194.relativeTransform = [
    [1, 0, 62],
    [0, 1, 256],
  ];
  frame_4242_3194.x = 62;
  frame_4242_3194.y = 256;
  frame_4242_3194.layoutGrow = 1;
  frame_4242_3194.fills = [];
  frame_4242_3194.counterAxisAlignItems = "CENTER";
  frame_4242_3194.strokeTopWeight = 1;
  frame_4242_3194.strokeBottomWeight = 1;
  frame_4242_3194.strokeLeftWeight = 1;
  frame_4242_3194.strokeRightWeight = 1;
  frame_4242_3194.clipsContent = false;
  frame_4242_3194.itemSpacing = 24;

  // Create ELLIPSE
  var ellipse_4243_3297 = figma.createEllipse();
  frame_4242_3194.appendChild(ellipse_4243_3297);
  ellipse_4243_3297.resize(54.0, 54.0);
  ellipse_4243_3297.name = "Ellipse 1";
  ellipse_4243_3297.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 1, g: 1, b: 1 },
      boundVariables: {},
    },
  ];
  ellipse_4243_3297.relativeTransform = [
    [1, 0, 173],
    [0, 1, 0],
  ];
  ellipse_4243_3297.x = 173;
  ellipse_4243_3297.constrainProportions = true;

  // Create TEXT
  var text_4242_3196 = figma.createText();
  frame_4242_3194.appendChild(text_4242_3196);
  text_4242_3196.fillStyleId = white_77ad.id;
  text_4242_3196.resize(400.0, 34.0);
  text_4242_3196.name = "Heading";
  text_4242_3196.relativeTransform = [
    [1, 0, 0],
    [0, 1, 78],
  ];
  text_4242_3196.y = 78;
  text_4242_3196.layoutAlign = "STRETCH";
  text_4242_3196.autoRename = false;

  // Font properties
  text_4242_3196.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_4242_3196.characters = "Long heading is what you see here in";
  text_4242_3196.fontSize = 24;
  text_4242_3196.listSpacing = 0;
  text_4242_3196.lineHeight = { unit: "PERCENT", value: 139.9999976158142 };
  text_4242_3196.fontName = { family: "Roboto", style: "Bold" };
  text_4242_3196.textAutoResize = "HEIGHT";

  // Create TEXT
  var text_4243_3307 = figma.createText();
  frame_4242_3194.appendChild(text_4243_3307);
  text_4243_3307.fillStyleId = white_77ad.id;
  text_4243_3307.resize(216.0, 34.0);
  text_4243_3307.name = "Heading";
  text_4243_3307.relativeTransform = [
    [1, 0, 92],
    [0, 1, 112],
  ];
  text_4243_3307.x = 92;
  text_4243_3307.y = 112;
  text_4243_3307.layoutAlign = "STRETCH";
  text_4243_3307.autoRename = false;

  // Font properties
  text_4243_3307.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_4243_3307.characters = "this feature section";
  text_4243_3307.fontSize = 24;
  text_4243_3307.listSpacing = 0;
  text_4243_3307.lineHeight = { unit: "PERCENT", value: 139.9999976158142 };
  text_4243_3307.fontName = { family: "Roboto", style: "Bold" };
  text_4243_3307.textAutoResize = "HEIGHT";

  // Create TEXT
  var text_4242_3197 = figma.createText();
  frame_4242_3194.appendChild(text_4242_3197);
  text_4242_3197.fillStyleId = white_77ad.id;
  text_4242_3197.resize(400.0, 104.0);
  text_4242_3197.relativeTransform = [
    [1, 0, 0],
    [0, 1, 173],
  ];
  text_4242_3197.y = 173;
  text_4242_3197.layoutAlign = "STRETCH";
  text_4242_3197.autoRename = false;

  // Font properties
  text_4242_3197.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4242_3197.characters =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.";
  text_4242_3197.fontSize = 17;
  text_4242_3197.listSpacing = 0;
  text_4242_3197.lineHeight = { unit: "PERCENT", value: 150 };
  text_4242_3197.textAutoResize = "HEIGHT";

  // Create FRAME
  var frame_4242_3198 = figma.createFrame();
  frame_4242_3194.appendChild(frame_4242_3198);
  frame_4242_3198.resize(400.0, 32.0);
  frame_4242_3198.primaryAxisSizingMode = "AUTO";
  frame_4242_3198.name = "Action";
  frame_4242_3198.relativeTransform = [
    [1, 0, 0],
    [0, 1, 314],
  ];
  frame_4242_3198.y = 314;
  frame_4242_3198.layoutAlign = "STRETCH";
  frame_4242_3198.fills = [];
  frame_4242_3198.paddingTop = 8;
  frame_4242_3198.counterAxisAlignItems = "CENTER";
  frame_4242_3198.strokeTopWeight = 1;
  frame_4242_3198.strokeBottomWeight = 1;
  frame_4242_3198.strokeLeftWeight = 1;
  frame_4242_3198.strokeRightWeight = 1;
  frame_4242_3198.clipsContent = false;
  frame_4242_3198.layoutMode = "VERTICAL";
  frame_4242_3198.itemSpacing = 8;

  // Create TEXT
  var text_4243_3308 = figma.createText();
  frame_4242_3198.appendChild(text_4243_3308);
  text_4243_3308.resize(64.0, 24.0);
  text_4243_3308.name = "Button >";
  text_4243_3308.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 1, g: 1, b: 1 },
      boundVariables: {},
    },
  ];
  text_4243_3308.relativeTransform = [
    [1, 0, 168],
    [0, 1, 8],
  ];
  text_4243_3308.x = 168;
  text_4243_3308.y = 8;

  // Font properties
  text_4243_3308.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4243_3308.characters = "Button  >";
  text_4243_3308.fontSize = 16;
  text_4243_3308.listSpacing = 0;
  text_4243_3308.lineHeight = { unit: "PERCENT", value: 150 };
  text_4243_3308.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create FRAME
  var frame_4243_3309 = figma.createFrame();
  frame_4242_3191.appendChild(frame_4243_3309);
  frame_4243_3309.resize(400.0, 346.0);
  frame_4243_3309.primaryAxisSizingMode = "AUTO";
  frame_4243_3309.name = "List Item";
  frame_4243_3309.relativeTransform = [
    [1, 0, 520],
    [0, 1, 256],
  ];
  frame_4243_3309.x = 520;
  frame_4243_3309.y = 256;
  frame_4243_3309.layoutGrow = 1;
  frame_4243_3309.fills = [];
  frame_4243_3309.counterAxisAlignItems = "CENTER";
  frame_4243_3309.strokeTopWeight = 1;
  frame_4243_3309.strokeBottomWeight = 1;
  frame_4243_3309.strokeLeftWeight = 1;
  frame_4243_3309.strokeRightWeight = 1;
  frame_4243_3309.clipsContent = false;
  frame_4243_3309.expanded = false;
  frame_4243_3309.itemSpacing = 24;

  // Create ELLIPSE
  var ellipse_4243_3310 = figma.createEllipse();
  frame_4243_3309.appendChild(ellipse_4243_3310);
  ellipse_4243_3310.resize(54.0, 54.0);
  ellipse_4243_3310.name = "Ellipse 1";
  ellipse_4243_3310.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 1, g: 1, b: 1 },
      boundVariables: {},
    },
  ];
  ellipse_4243_3310.relativeTransform = [
    [1, 0, 173],
    [0, 1, 0],
  ];
  ellipse_4243_3310.x = 173;
  ellipse_4243_3310.constrainProportions = true;

  // Create TEXT
  var text_4243_3311 = figma.createText();
  frame_4243_3309.appendChild(text_4243_3311);
  text_4243_3311.fillStyleId = white_77ad.id;
  text_4243_3311.resize(400.0, 34.0);
  text_4243_3311.name = "Heading";
  text_4243_3311.relativeTransform = [
    [1, 0, 0],
    [0, 1, 78],
  ];
  text_4243_3311.y = 78;
  text_4243_3311.layoutAlign = "STRETCH";
  text_4243_3311.autoRename = false;

  // Font properties
  text_4243_3311.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_4243_3311.characters = "Long heading is what you see here in";
  text_4243_3311.fontSize = 24;
  text_4243_3311.listSpacing = 0;
  text_4243_3311.lineHeight = { unit: "PERCENT", value: 139.9999976158142 };
  text_4243_3311.fontName = { family: "Roboto", style: "Bold" };
  text_4243_3311.textAutoResize = "HEIGHT";

  // Create TEXT
  var text_4243_3312 = figma.createText();
  frame_4243_3309.appendChild(text_4243_3312);
  text_4243_3312.fillStyleId = white_77ad.id;
  text_4243_3312.resize(216.0, 34.0);
  text_4243_3312.name = "Heading";
  text_4243_3312.relativeTransform = [
    [1, 0, 92],
    [0, 1, 112],
  ];
  text_4243_3312.x = 92;
  text_4243_3312.y = 112;
  text_4243_3312.layoutAlign = "STRETCH";
  text_4243_3312.autoRename = false;

  // Font properties
  text_4243_3312.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_4243_3312.characters = "this feature section";
  text_4243_3312.fontSize = 24;
  text_4243_3312.listSpacing = 0;
  text_4243_3312.lineHeight = { unit: "PERCENT", value: 139.9999976158142 };
  text_4243_3312.fontName = { family: "Roboto", style: "Bold" };
  text_4243_3312.textAutoResize = "HEIGHT";

  // Create TEXT
  var text_4243_3313 = figma.createText();
  frame_4243_3309.appendChild(text_4243_3313);
  text_4243_3313.fillStyleId = white_77ad.id;
  text_4243_3313.resize(400.0, 104.0);
  text_4243_3313.relativeTransform = [
    [1, 0, 0],
    [0, 1, 173],
  ];
  text_4243_3313.y = 173;
  text_4243_3313.layoutAlign = "STRETCH";
  text_4243_3313.autoRename = false;

  // Font properties
  text_4243_3313.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4243_3313.characters =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.";
  text_4243_3313.fontSize = 17;
  text_4243_3313.listSpacing = 0;
  text_4243_3313.lineHeight = { unit: "PERCENT", value: 150 };
  text_4243_3313.textAutoResize = "HEIGHT";

  // Create FRAME
  var frame_4243_3314 = figma.createFrame();
  frame_4243_3309.appendChild(frame_4243_3314);
  frame_4243_3314.resize(400.0, 32.0);
  frame_4243_3314.primaryAxisSizingMode = "AUTO";
  frame_4243_3314.name = "Action";
  frame_4243_3314.relativeTransform = [
    [1, 0, 0],
    [0, 1, 314],
  ];
  frame_4243_3314.y = 314;
  frame_4243_3314.layoutAlign = "STRETCH";
  frame_4243_3314.fills = [];
  frame_4243_3314.paddingTop = 8;
  frame_4243_3314.counterAxisAlignItems = "CENTER";
  frame_4243_3314.strokeTopWeight = 1;
  frame_4243_3314.strokeBottomWeight = 1;
  frame_4243_3314.strokeLeftWeight = 1;
  frame_4243_3314.strokeRightWeight = 1;
  frame_4243_3314.clipsContent = false;
  frame_4243_3314.layoutMode = "VERTICAL";
  frame_4243_3314.itemSpacing = 8;

  // Create TEXT
  var text_4243_3315 = figma.createText();
  frame_4243_3314.appendChild(text_4243_3315);
  text_4243_3315.resize(64.0, 24.0);
  text_4243_3315.name = "Button >";
  text_4243_3315.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 1, g: 1, b: 1 },
      boundVariables: {},
    },
  ];
  text_4243_3315.relativeTransform = [
    [1, 0, 168],
    [0, 1, 8],
  ];
  text_4243_3315.x = 168;
  text_4243_3315.y = 8;

  // Font properties
  text_4243_3315.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4243_3315.characters = "Button  >";
  text_4243_3315.fontSize = 16;
  text_4243_3315.listSpacing = 0;
  text_4243_3315.lineHeight = { unit: "PERCENT", value: 150 };
  text_4243_3315.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create FRAME
  var frame_4243_3316 = figma.createFrame();
  frame_4242_3191.appendChild(frame_4243_3316);
  frame_4243_3316.resize(400.0, 346.0);
  frame_4243_3316.primaryAxisSizingMode = "AUTO";
  frame_4243_3316.name = "List Item";
  frame_4243_3316.relativeTransform = [
    [1, 0, 978],
    [0, 1, 256],
  ];
  frame_4243_3316.x = 978;
  frame_4243_3316.y = 256;
  frame_4243_3316.layoutGrow = 1;
  frame_4243_3316.fills = [];
  frame_4243_3316.counterAxisAlignItems = "CENTER";
  frame_4243_3316.strokeTopWeight = 1;
  frame_4243_3316.strokeBottomWeight = 1;
  frame_4243_3316.strokeLeftWeight = 1;
  frame_4243_3316.strokeRightWeight = 1;
  frame_4243_3316.clipsContent = false;
  frame_4243_3316.expanded = false;
  frame_4243_3316.itemSpacing = 24;

  // Create ELLIPSE
  var ellipse_4243_3317 = figma.createEllipse();
  frame_4243_3316.appendChild(ellipse_4243_3317);
  ellipse_4243_3317.resize(54.0, 54.0);
  ellipse_4243_3317.name = "Ellipse 1";
  ellipse_4243_3317.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 1, g: 1, b: 1 },
      boundVariables: {},
    },
  ];
  ellipse_4243_3317.relativeTransform = [
    [1, 0, 173],
    [0, 1, 0],
  ];
  ellipse_4243_3317.x = 173;
  ellipse_4243_3317.constrainProportions = true;

  // Create TEXT
  var text_4243_3318 = figma.createText();
  frame_4243_3316.appendChild(text_4243_3318);
  text_4243_3318.fillStyleId = white_77ad.id;
  text_4243_3318.resize(400.0, 34.0);
  text_4243_3318.name = "Heading";
  text_4243_3318.relativeTransform = [
    [1, 0, 0],
    [0, 1, 78],
  ];
  text_4243_3318.y = 78;
  text_4243_3318.layoutAlign = "STRETCH";
  text_4243_3318.autoRename = false;

  // Font properties
  text_4243_3318.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_4243_3318.characters = "Long heading is what you see here in";
  text_4243_3318.fontSize = 24;
  text_4243_3318.listSpacing = 0;
  text_4243_3318.lineHeight = { unit: "PERCENT", value: 139.9999976158142 };
  text_4243_3318.fontName = { family: "Roboto", style: "Bold" };
  text_4243_3318.textAutoResize = "HEIGHT";

  // Create TEXT
  var text_4243_3319 = figma.createText();
  frame_4243_3316.appendChild(text_4243_3319);
  text_4243_3319.fillStyleId = white_77ad.id;
  text_4243_3319.resize(216.0, 34.0);
  text_4243_3319.name = "Heading";
  text_4243_3319.relativeTransform = [
    [1, 0, 92],
    [0, 1, 112],
  ];
  text_4243_3319.x = 92;
  text_4243_3319.y = 112;
  text_4243_3319.layoutAlign = "STRETCH";
  text_4243_3319.autoRename = false;

  // Font properties
  text_4243_3319.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_4243_3319.characters = "this feature section";
  text_4243_3319.fontSize = 24;
  text_4243_3319.listSpacing = 0;
  text_4243_3319.lineHeight = { unit: "PERCENT", value: 139.9999976158142 };
  text_4243_3319.fontName = { family: "Roboto", style: "Bold" };
  text_4243_3319.textAutoResize = "HEIGHT";

  // Create TEXT
  var text_4243_3320 = figma.createText();
  frame_4243_3316.appendChild(text_4243_3320);
  text_4243_3320.fillStyleId = white_77ad.id;
  text_4243_3320.resize(400.0, 104.0);
  text_4243_3320.relativeTransform = [
    [1, 0, 0],
    [0, 1, 173],
  ];
  text_4243_3320.y = 173;
  text_4243_3320.layoutAlign = "STRETCH";
  text_4243_3320.autoRename = false;

  // Font properties
  text_4243_3320.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4243_3320.characters =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.";
  text_4243_3320.fontSize = 17;
  text_4243_3320.listSpacing = 0;
  text_4243_3320.lineHeight = { unit: "PERCENT", value: 150 };
  text_4243_3320.textAutoResize = "HEIGHT";

  // Create FRAME
  var frame_4243_3321 = figma.createFrame();
  frame_4243_3316.appendChild(frame_4243_3321);
  frame_4243_3321.resize(400.0, 32.0);
  frame_4243_3321.primaryAxisSizingMode = "AUTO";
  frame_4243_3321.name = "Action";
  frame_4243_3321.relativeTransform = [
    [1, 0, 0],
    [0, 1, 314],
  ];
  frame_4243_3321.y = 314;
  frame_4243_3321.layoutAlign = "STRETCH";
  frame_4243_3321.fills = [];
  frame_4243_3321.paddingTop = 8;
  frame_4243_3321.counterAxisAlignItems = "CENTER";
  frame_4243_3321.strokeTopWeight = 1;
  frame_4243_3321.strokeBottomWeight = 1;
  frame_4243_3321.strokeLeftWeight = 1;
  frame_4243_3321.strokeRightWeight = 1;
  frame_4243_3321.clipsContent = false;
  frame_4243_3321.layoutMode = "VERTICAL";
  frame_4243_3321.itemSpacing = 8;

  // Create TEXT
  var text_4243_3322 = figma.createText();
  frame_4243_3321.appendChild(text_4243_3322);
  text_4243_3322.resize(64.0, 24.0);
  text_4243_3322.name = "Button >";
  text_4243_3322.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 1, g: 1, b: 1 },
      boundVariables: {},
    },
  ];
  text_4243_3322.relativeTransform = [
    [1, 0, 168],
    [0, 1, 8],
  ];
  text_4243_3322.x = 168;
  text_4243_3322.y = 8;

  // Font properties
  text_4243_3322.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4243_3322.characters = "Button  >";
  text_4243_3322.fontSize = 16;
  text_4243_3322.listSpacing = 0;
  text_4243_3322.lineHeight = { unit: "PERCENT", value: 150 };
  text_4243_3322.textAutoResize = "WIDTH_AND_HEIGHT";
};

const createTeam = async () => {
  // Load FONTS
  async function loadFonts() {
    await Promise.all([
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
  var frame_4244_3749 = figma.createFrame();
  figma.currentPage.appendChild(frame_4244_3749);
  frame_4244_3749.resize(1440.0, 1946.0);
  frame_4244_3749.primaryAxisSizingMode = "AUTO";
  frame_4244_3749.fillStyleId = white_77ad.id;
  frame_4244_3749.backgroundStyleId = white_77ad.id;
  frame_4244_3749.name = "Team / 6 /";
  frame_4244_3749.relativeTransform = [
    [1, 0, 1694],
    [0, 1, 8276],
  ];
  frame_4244_3749.x = 1694;
  frame_4244_3749.y = 8276;
  frame_4244_3749.paddingLeft = 64;
  frame_4244_3749.paddingRight = 64;
  frame_4244_3749.paddingTop = 112;
  frame_4244_3749.paddingBottom = 112;
  frame_4244_3749.counterAxisAlignItems = "CENTER";
  frame_4244_3749.strokeTopWeight = 1;
  frame_4244_3749.strokeBottomWeight = 1;
  frame_4244_3749.strokeLeftWeight = 1;
  frame_4244_3749.strokeRightWeight = 1;
  frame_4244_3749.itemSpacing = 80;

  // Create FRAME
  var frame_4244_3750 = figma.createFrame();
  frame_4244_3749.appendChild(frame_4244_3750);
  frame_4244_3750.resize(768.0, 163.0);
  frame_4244_3750.primaryAxisSizingMode = "AUTO";
  frame_4244_3750.name = "Section Title";
  frame_4244_3750.relativeTransform = [
    [1, 0, 336],
    [0, 1, 112],
  ];
  frame_4244_3750.x = 336;
  frame_4244_3750.y = 112;
  frame_4244_3750.fills = [];
  frame_4244_3750.counterAxisAlignItems = "CENTER";
  frame_4244_3750.strokeTopWeight = 1;
  frame_4244_3750.strokeBottomWeight = 1;
  frame_4244_3750.strokeLeftWeight = 1;
  frame_4244_3750.strokeRightWeight = 1;
  frame_4244_3750.clipsContent = false;
  frame_4244_3750.itemSpacing = 16;

  // Create TEXT
  var text_4244_3751 = figma.createText();
  frame_4244_3750.appendChild(text_4244_3751);
  text_4244_3751.fillStyleId = black_4902.id;
  text_4244_3751.resize(56.0, 26.0);
  text_4244_3751.name = "Subheading";
  text_4244_3751.relativeTransform = [
    [1, 0, 356],
    [0, 1, 0],
  ];
  text_4244_3751.x = 356;
  text_4244_3751.autoRename = false;

  // Font properties
  text_4244_3751.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_4244_3751.characters = "Tagline";
  text_4244_3751.fontSize = 17;
  text_4244_3751.listSpacing = 0;
  text_4244_3751.lineHeight = { unit: "PERCENT", value: 150 };
  text_4244_3751.fontName = { family: "Roboto", style: "Bold" };
  text_4244_3751.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create FRAME
  var frame_4244_3752 = figma.createFrame();
  frame_4244_3750.appendChild(frame_4244_3752);
  frame_4244_3752.resize(768.0, 123.0);
  frame_4244_3752.primaryAxisSizingMode = "AUTO";
  frame_4244_3752.name = "Content";
  frame_4244_3752.relativeTransform = [
    [1, 0, 0],
    [0, 1, 40],
  ];
  frame_4244_3752.y = 40;
  frame_4244_3752.layoutAlign = "STRETCH";
  frame_4244_3752.fills = [];
  frame_4244_3752.counterAxisAlignItems = "CENTER";
  frame_4244_3752.strokeTopWeight = 1;
  frame_4244_3752.strokeBottomWeight = 1;
  frame_4244_3752.strokeLeftWeight = 1;
  frame_4244_3752.strokeRightWeight = 1;
  frame_4244_3752.clipsContent = false;
  frame_4244_3752.itemSpacing = 24;

  // Create TEXT
  var text_4244_3753 = figma.createText();
  frame_4244_3752.appendChild(text_4244_3753);
  text_4244_3753.fillStyleId = black_4902.id;
  text_4244_3753.resize(199.0, 72.0);
  text_4244_3753.name = "Heading";
  text_4244_3753.relativeTransform = [
    [1, 0, 284.5],
    [0, 1, 0],
  ];
  text_4244_3753.x = 284.5;
  text_4244_3753.autoRename = false;

  // Font properties
  text_4244_3753.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_4244_3753.characters = "Our team";
  text_4244_3753.fontSize = 48;
  text_4244_3753.listSpacing = 0;
  text_4244_3753.lineHeight = { unit: "PERCENT", value: 150 };
  text_4244_3753.fontName = { family: "Roboto", style: "Bold" };
  text_4244_3753.textAutoResize = "HEIGHT";

  // Create TEXT
  var text_4244_3754 = figma.createText();
  frame_4244_3752.appendChild(text_4244_3754);
  text_4244_3754.fillStyleId = black_4902.id;
  text_4244_3754.resize(419.0, 26.0);
  text_4244_3754.name =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  text_4244_3754.relativeTransform = [
    [1, 0, 174],
    [0, 1, 89],
  ];
  text_4244_3754.x = 174;
  text_4244_3754.y = 89;

  // Font properties
  text_4244_3754.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4244_3754.characters =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ";
  text_4244_3754.fontSize = 17;
  text_4244_3754.listSpacing = 0;
  text_4244_3754.lineHeight = { unit: "PERCENT", value: 150 };
  text_4244_3754.textAutoResize = "HEIGHT";

  // Create FRAME
  var frame_4244_3755 = figma.createFrame();
  frame_4244_3749.appendChild(frame_4244_3755);
  frame_4244_3755.resize(1312.0, 588.0);
  frame_4244_3755.primaryAxisSizingMode = "AUTO";
  frame_4244_3755.name = "Content";
  frame_4244_3755.relativeTransform = [
    [1, 0, 64],
    [0, 1, 355],
  ];
  frame_4244_3755.x = 64;
  frame_4244_3755.y = 355;
  frame_4244_3755.layoutAlign = "STRETCH";
  frame_4244_3755.fills = [];
  frame_4244_3755.counterAxisAlignItems = "CENTER";
  frame_4244_3755.strokeTopWeight = 1;
  frame_4244_3755.strokeBottomWeight = 1;
  frame_4244_3755.strokeLeftWeight = 1;
  frame_4244_3755.strokeRightWeight = 1;
  frame_4244_3755.clipsContent = false;
  frame_4244_3755.layoutMode = "VERTICAL";
  frame_4244_3755.itemSpacing = 96;

  // Create FRAME
  var frame_4244_3756 = figma.createFrame();
  frame_4244_3755.appendChild(frame_4244_3756);
  frame_4244_3756.resize(1312.0, 588.0);
  frame_4244_3756.primaryAxisSizingMode = "AUTO";
  frame_4244_3756.name = "Content";
  frame_4244_3756.layoutAlign = "STRETCH";
  frame_4244_3756.fills = [];
  frame_4244_3756.strokeTopWeight = 1;
  frame_4244_3756.strokeBottomWeight = 1;
  frame_4244_3756.strokeLeftWeight = 1;
  frame_4244_3756.strokeRightWeight = 1;
  frame_4244_3756.clipsContent = false;
  frame_4244_3756.itemSpacing = 64;

  // Create FRAME
  var frame_4244_3757 = figma.createFrame();
  frame_4244_3756.appendChild(frame_4244_3757);
  frame_4244_3757.resize(411.0, 588.0);
  frame_4244_3757.name = "Row";
  frame_4244_3757.fills = [];
  frame_4244_3757.primaryAxisSizingMode = "FIXED";
  frame_4244_3757.strokeTopWeight = 1;
  frame_4244_3757.strokeBottomWeight = 1;
  frame_4244_3757.strokeLeftWeight = 1;
  frame_4244_3757.strokeRightWeight = 1;
  frame_4244_3757.clipsContent = false;
  frame_4244_3757.expanded = false;
  frame_4244_3757.itemSpacing = 48;

  // Create FRAME
  var frame_4244_3758 = figma.createFrame();
  frame_4244_3757.appendChild(frame_4244_3758);
  frame_4244_3758.resize(411.0, 588.0);
  frame_4244_3758.primaryAxisSizingMode = "AUTO";
  frame_4244_3758.name = "Card";
  frame_4244_3758.layoutGrow = 1;
  frame_4244_3758.fills = [];
  frame_4244_3758.counterAxisAlignItems = "CENTER";
  frame_4244_3758.strokeTopWeight = 1;
  frame_4244_3758.strokeBottomWeight = 1;
  frame_4244_3758.strokeLeftWeight = 1;
  frame_4244_3758.strokeRightWeight = 1;
  frame_4244_3758.clipsContent = false;
  frame_4244_3758.itemSpacing = 24;

  // Create RECTANGLE
  var rectangle_4244_4049 = figma.createRectangle();
  frame_4244_3758.appendChild(rectangle_4244_4049);
  rectangle_4244_4049.resize(411.0, 411.0);
  rectangle_4244_4049.name = "Rectangle 1";
  rectangle_4244_4049.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        r: 0.8509804010391235,
        g: 0.8509804010391235,
        b: 0.8509804010391235,
      },
      boundVariables: {},
    },
  ];
  rectangle_4244_4049.constrainProportions = true;
  rectangle_4244_4049.strokeTopWeight = 1;
  rectangle_4244_4049.strokeBottomWeight = 1;
  rectangle_4244_4049.strokeLeftWeight = 1;
  rectangle_4244_4049.strokeRightWeight = 1;

  // Create TEXT
  var text_4244_4050 = figma.createText();
  frame_4244_3758.appendChild(text_4244_4050);
  text_4244_4050.resize(117.0, 26.0);
  text_4244_4050.name = "PLACEHOLDER";
  text_4244_4050.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 0, g: 0, b: 0 },
      boundVariables: {},
    },
  ];
  text_4244_4050.relativeTransform = [
    [1, 0, 147],
    [0, 1, 193],
  ];
  text_4244_4050.x = 147;
  text_4244_4050.y = 193;

  // Font properties
  text_4244_4050.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_4244_4050.characters = "PLACEHOLDER";
  text_4244_4050.fontSize = 17;
  text_4244_4050.listSpacing = 0;
  text_4244_4050.lineHeight = { unit: "PERCENT", value: 150 };
  text_4244_4050.fontName = { family: "Roboto", style: "Bold" };
  text_4244_4050.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create FRAME
  var frame_4244_3760 = figma.createFrame();
  frame_4244_3758.appendChild(frame_4244_3760);
  frame_4244_3760.resize(411.0, 123.0);
  frame_4244_3760.primaryAxisSizingMode = "AUTO";
  frame_4244_3760.name = "Content";
  frame_4244_3760.relativeTransform = [
    [1, 0, 0],
    [0, 1, 434],
  ];
  frame_4244_3760.y = 434;
  frame_4244_3760.layoutAlign = "STRETCH";
  frame_4244_3760.fills = [];
  frame_4244_3760.counterAxisAlignItems = "CENTER";
  frame_4244_3760.strokeTopWeight = 1;
  frame_4244_3760.strokeBottomWeight = 1;
  frame_4244_3760.strokeLeftWeight = 1;
  frame_4244_3760.strokeRightWeight = 1;
  frame_4244_3760.clipsContent = false;
  frame_4244_3760.itemSpacing = 16;

  // Create FRAME
  var frame_4244_3761 = figma.createFrame();
  frame_4244_3760.appendChild(frame_4244_3761);
  frame_4244_3761.resize(411.0, 58.0);
  frame_4244_3761.primaryAxisSizingMode = "AUTO";
  frame_4244_3761.name = "Title";
  frame_4244_3761.layoutAlign = "STRETCH";
  frame_4244_3761.fills = [];
  frame_4244_3761.counterAxisAlignItems = "CENTER";
  frame_4244_3761.strokeTopWeight = 1;
  frame_4244_3761.strokeBottomWeight = 1;
  frame_4244_3761.strokeLeftWeight = 1;
  frame_4244_3761.strokeRightWeight = 1;
  frame_4244_3761.clipsContent = false;
  frame_4244_3761.layoutMode = "VERTICAL";

  // Create TEXT
  var text_4244_3762 = figma.createText();
  frame_4244_3761.appendChild(text_4244_3762);
  text_4244_3762.fillStyleId = black_4902.id;
  text_4244_3762.resize(92.0, 32.0);
  text_4244_3762.name = "Name";
  text_4244_3762.relativeTransform = [
    [1, 0, 159.5],
    [0, 1, 0],
  ];
  text_4244_3762.x = 159.5;
  text_4244_3762.autoRename = false;

  // Font properties
  text_4244_3762.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_4244_3762.characters = "Full name";
  text_4244_3762.fontSize = 21;
  text_4244_3762.listSpacing = 0;
  text_4244_3762.lineHeight = { unit: "PERCENT", value: 150 };
  text_4244_3762.fontName = { family: "Roboto", style: "Bold" };
  text_4244_3762.textAutoResize = "HEIGHT";

  // Create TEXT
  var text_4244_3763 = figma.createText();
  frame_4244_3761.appendChild(text_4244_3763);
  text_4244_3763.fillStyleId = black_4902.id;
  text_4244_3763.resize(62.0, 26.0);
  text_4244_3763.name = "Job Title";
  text_4244_3763.relativeTransform = [
    [1, 0, 174.5],
    [0, 1, 32],
  ];
  text_4244_3763.x = 174.5;
  text_4244_3763.y = 32;
  text_4244_3763.autoRename = false;

  // Font properties
  text_4244_3763.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4244_3763.characters = "Job title";
  text_4244_3763.fontSize = 17;
  text_4244_3763.listSpacing = 0;
  text_4244_3763.lineHeight = { unit: "PERCENT", value: 150 };
  text_4244_3763.textAutoResize = "HEIGHT";

  // Create TEXT
  var text_4244_3764 = figma.createText();
  frame_4244_3760.appendChild(text_4244_3764);
  text_4244_3764.fillStyleId = black_4902.id;
  text_4244_3764.resize(411.0, 52.0);
  text_4244_3764.relativeTransform = [
    [1, 0, 0],
    [0, 1, 75],
  ];
  text_4244_3764.y = 75;
  text_4244_3764.layoutAlign = "STRETCH";
  text_4244_3764.autoRename = false;

  // Font properties
  text_4244_3764.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4244_3764.characters =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum.";
  text_4244_3764.fontSize = 17;
  text_4244_3764.listSpacing = 0;
  text_4244_3764.lineHeight = { unit: "PERCENT", value: 150 };
  text_4244_3764.textAutoResize = "HEIGHT";

  // Create FRAME
  var frame_4244_3765 = figma.createFrame();
  frame_4244_3758.appendChild(frame_4244_3765);
  frame_4244_3765.resize(100.0, 24.0);
  frame_4244_3765.primaryAxisSizingMode = "AUTO";
  frame_4244_3765.counterAxisSizingMode = "AUTO";
  frame_4244_3765.name = "Social Icons";
  frame_4244_3765.relativeTransform = [
    [1, 0, 155.5],
    [0, 1, 630],
  ];
  frame_4244_3765.x = 155.5;
  frame_4244_3765.y = 630;
  frame_4244_3765.fills = [];
  frame_4244_3765.strokeTopWeight = 1;
  frame_4244_3765.strokeBottomWeight = 1;
  frame_4244_3765.strokeLeftWeight = 1;
  frame_4244_3765.strokeRightWeight = 1;
  frame_4244_3765.clipsContent = false;
  frame_4244_3765.layoutMode = "HORIZONTAL";
  frame_4244_3765.counterAxisSizingMode = "AUTO";
  frame_4244_3765.itemSpacing = 14;

  // Create FRAME
  var frame_4244_4188 = figma.createFrame();
  frame_4244_3756.appendChild(frame_4244_4188);
  frame_4244_4188.resize(411.0, 588.0);
  frame_4244_4188.name = "Row";
  frame_4244_4188.relativeTransform = [
    [1, 0, 450],
    [0, 1, 0],
  ];
  frame_4244_4188.x = 450;
  frame_4244_4188.fills = [];
  frame_4244_4188.primaryAxisSizingMode = "FIXED";
  frame_4244_4188.strokeTopWeight = 1;
  frame_4244_4188.strokeBottomWeight = 1;
  frame_4244_4188.strokeLeftWeight = 1;
  frame_4244_4188.strokeRightWeight = 1;
  frame_4244_4188.clipsContent = false;
  frame_4244_4188.expanded = false;
  frame_4244_4188.itemSpacing = 48;

  // Create FRAME
  var frame_4244_4189 = figma.createFrame();
  frame_4244_4188.appendChild(frame_4244_4189);
  frame_4244_4189.resize(411.0, 588.0);
  frame_4244_4189.primaryAxisSizingMode = "AUTO";
  frame_4244_4189.name = "Card";
  frame_4244_4189.layoutGrow = 1;
  frame_4244_4189.fills = [];
  frame_4244_4189.counterAxisAlignItems = "CENTER";
  frame_4244_4189.strokeTopWeight = 1;
  frame_4244_4189.strokeBottomWeight = 1;
  frame_4244_4189.strokeLeftWeight = 1;
  frame_4244_4189.strokeRightWeight = 1;
  frame_4244_4189.clipsContent = false;
  frame_4244_4189.itemSpacing = 24;

  // Create RECTANGLE
  var rectangle_4244_4190 = figma.createRectangle();
  frame_4244_4189.appendChild(rectangle_4244_4190);
  rectangle_4244_4190.resize(411.0, 411.0);
  rectangle_4244_4190.name = "Rectangle 1";
  rectangle_4244_4190.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        r: 0.8509804010391235,
        g: 0.8509804010391235,
        b: 0.8509804010391235,
      },
      boundVariables: {},
    },
  ];
  rectangle_4244_4190.constrainProportions = true;
  rectangle_4244_4190.strokeTopWeight = 1;
  rectangle_4244_4190.strokeBottomWeight = 1;
  rectangle_4244_4190.strokeLeftWeight = 1;
  rectangle_4244_4190.strokeRightWeight = 1;

  // Create TEXT
  var text_4244_4191 = figma.createText();
  frame_4244_4189.appendChild(text_4244_4191);
  text_4244_4191.resize(117.0, 26.0);
  text_4244_4191.name = "PLACEHOLDER";
  text_4244_4191.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 0, g: 0, b: 0 },
      boundVariables: {},
    },
  ];
  text_4244_4191.relativeTransform = [
    [1, 0, 147],
    [0, 1, 193],
  ];
  text_4244_4191.x = 147;
  text_4244_4191.y = 193;

  // Font properties
  text_4244_4191.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_4244_4191.characters = "PLACEHOLDER";
  text_4244_4191.fontSize = 17;
  text_4244_4191.listSpacing = 0;
  text_4244_4191.lineHeight = { unit: "PERCENT", value: 150 };
  text_4244_4191.fontName = { family: "Roboto", style: "Bold" };
  text_4244_4191.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create FRAME
  var frame_4244_4192 = figma.createFrame();
  frame_4244_4189.appendChild(frame_4244_4192);
  frame_4244_4192.resize(411.0, 123.0);
  frame_4244_4192.primaryAxisSizingMode = "AUTO";
  frame_4244_4192.name = "Content";
  frame_4244_4192.relativeTransform = [
    [1, 0, 0],
    [0, 1, 434],
  ];
  frame_4244_4192.y = 434;
  frame_4244_4192.layoutAlign = "STRETCH";
  frame_4244_4192.fills = [];
  frame_4244_4192.counterAxisAlignItems = "CENTER";
  frame_4244_4192.strokeTopWeight = 1;
  frame_4244_4192.strokeBottomWeight = 1;
  frame_4244_4192.strokeLeftWeight = 1;
  frame_4244_4192.strokeRightWeight = 1;
  frame_4244_4192.clipsContent = false;
  frame_4244_4192.itemSpacing = 16;

  // Create FRAME
  var frame_4244_4193 = figma.createFrame();
  frame_4244_4192.appendChild(frame_4244_4193);
  frame_4244_4193.resize(411.0, 58.0);
  frame_4244_4193.primaryAxisSizingMode = "AUTO";
  frame_4244_4193.name = "Title";
  frame_4244_4193.layoutAlign = "STRETCH";
  frame_4244_4193.fills = [];
  frame_4244_4193.counterAxisAlignItems = "CENTER";
  frame_4244_4193.strokeTopWeight = 1;
  frame_4244_4193.strokeBottomWeight = 1;
  frame_4244_4193.strokeLeftWeight = 1;
  frame_4244_4193.strokeRightWeight = 1;
  frame_4244_4193.clipsContent = false;
  frame_4244_4193.layoutMode = "VERTICAL";

  // Create TEXT
  var text_4244_4194 = figma.createText();
  frame_4244_4193.appendChild(text_4244_4194);
  text_4244_4194.fillStyleId = black_4902.id;
  text_4244_4194.resize(92.0, 32.0);
  text_4244_4194.name = "Name";
  text_4244_4194.relativeTransform = [
    [1, 0, 159.5],
    [0, 1, 0],
  ];
  text_4244_4194.x = 159.5;
  text_4244_4194.autoRename = false;

  // Font properties
  text_4244_4194.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_4244_4194.characters = "Full name";
  text_4244_4194.fontSize = 21;
  text_4244_4194.listSpacing = 0;
  text_4244_4194.lineHeight = { unit: "PERCENT", value: 150 };
  text_4244_4194.fontName = { family: "Roboto", style: "Bold" };
  text_4244_4194.textAutoResize = "HEIGHT";

  // Create TEXT
  var text_4244_4195 = figma.createText();
  frame_4244_4193.appendChild(text_4244_4195);
  text_4244_4195.fillStyleId = black_4902.id;
  text_4244_4195.resize(62.0, 26.0);
  text_4244_4195.name = "Job Title";
  text_4244_4195.relativeTransform = [
    [1, 0, 174.5],
    [0, 1, 32],
  ];
  text_4244_4195.x = 174.5;
  text_4244_4195.y = 32;
  text_4244_4195.autoRename = false;

  // Font properties
  text_4244_4195.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4244_4195.characters = "Job title";
  text_4244_4195.fontSize = 17;
  text_4244_4195.listSpacing = 0;
  text_4244_4195.lineHeight = { unit: "PERCENT", value: 150 };
  text_4244_4195.textAutoResize = "HEIGHT";

  // Create TEXT
  var text_4244_4196 = figma.createText();
  frame_4244_4192.appendChild(text_4244_4196);
  text_4244_4196.fillStyleId = black_4902.id;
  text_4244_4196.resize(411.0, 52.0);
  text_4244_4196.relativeTransform = [
    [1, 0, 0],
    [0, 1, 75],
  ];
  text_4244_4196.y = 75;
  text_4244_4196.layoutAlign = "STRETCH";
  text_4244_4196.autoRename = false;

  // Font properties
  text_4244_4196.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4244_4196.characters =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum.";
  text_4244_4196.fontSize = 17;
  text_4244_4196.listSpacing = 0;
  text_4244_4196.lineHeight = { unit: "PERCENT", value: 150 };
  text_4244_4196.textAutoResize = "HEIGHT";

  // Create FRAME
  var frame_4244_4197 = figma.createFrame();
  frame_4244_4189.appendChild(frame_4244_4197);
  frame_4244_4197.resize(100.0, 24.0);
  frame_4244_4197.primaryAxisSizingMode = "AUTO";
  frame_4244_4197.counterAxisSizingMode = "AUTO";
  frame_4244_4197.name = "Social Icons";
  frame_4244_4197.relativeTransform = [
    [1, 0, 155.5],
    [0, 1, 630],
  ];
  frame_4244_4197.x = 155.5;
  frame_4244_4197.y = 630;
  frame_4244_4197.fills = [];
  frame_4244_4197.strokeTopWeight = 1;
  frame_4244_4197.strokeBottomWeight = 1;
  frame_4244_4197.strokeLeftWeight = 1;
  frame_4244_4197.strokeRightWeight = 1;
  frame_4244_4197.clipsContent = false;
  frame_4244_4197.layoutMode = "HORIZONTAL";
  frame_4244_4197.counterAxisSizingMode = "AUTO";
  frame_4244_4197.itemSpacing = 14;

  // Create FRAME
  var frame_4244_4226 = figma.createFrame();
  frame_4244_3756.appendChild(frame_4244_4226);
  frame_4244_4226.resize(411.0, 588.0);
  frame_4244_4226.name = "Row";
  frame_4244_4226.relativeTransform = [
    [1, 0, 900],
    [0, 1, 0],
  ];
  frame_4244_4226.x = 900;
  frame_4244_4226.fills = [];
  frame_4244_4226.primaryAxisSizingMode = "FIXED";
  frame_4244_4226.strokeTopWeight = 1;
  frame_4244_4226.strokeBottomWeight = 1;
  frame_4244_4226.strokeLeftWeight = 1;
  frame_4244_4226.strokeRightWeight = 1;
  frame_4244_4226.clipsContent = false;
  frame_4244_4226.expanded = false;
  frame_4244_4226.itemSpacing = 48;

  // Create FRAME
  var frame_4244_4227 = figma.createFrame();
  frame_4244_4226.appendChild(frame_4244_4227);
  frame_4244_4227.resize(411.0, 588.0);
  frame_4244_4227.primaryAxisSizingMode = "AUTO";
  frame_4244_4227.name = "Card";
  frame_4244_4227.layoutGrow = 1;
  frame_4244_4227.fills = [];
  frame_4244_4227.counterAxisAlignItems = "CENTER";
  frame_4244_4227.strokeTopWeight = 1;
  frame_4244_4227.strokeBottomWeight = 1;
  frame_4244_4227.strokeLeftWeight = 1;
  frame_4244_4227.strokeRightWeight = 1;
  frame_4244_4227.clipsContent = false;
  frame_4244_4227.expanded = false;
  frame_4244_4227.itemSpacing = 24;

  // Create RECTANGLE
  var rectangle_4244_4228 = figma.createRectangle();
  frame_4244_4227.appendChild(rectangle_4244_4228);
  rectangle_4244_4228.resize(411.0, 411.0);
  rectangle_4244_4228.name = "Rectangle 1";
  rectangle_4244_4228.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        r: 0.8509804010391235,
        g: 0.8509804010391235,
        b: 0.8509804010391235,
      },
      boundVariables: {},
    },
  ];
  rectangle_4244_4228.constrainProportions = true;
  rectangle_4244_4228.strokeTopWeight = 1;
  rectangle_4244_4228.strokeBottomWeight = 1;
  rectangle_4244_4228.strokeLeftWeight = 1;
  rectangle_4244_4228.strokeRightWeight = 1;

  // Create TEXT
  var text_4244_4229 = figma.createText();
  frame_4244_4227.appendChild(text_4244_4229);
  text_4244_4229.resize(117.0, 26.0);
  text_4244_4229.name = "PLACEHOLDER";
  text_4244_4229.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 0, g: 0, b: 0 },
      boundVariables: {},
    },
  ];
  text_4244_4229.relativeTransform = [
    [1, 0, 147],
    [0, 1, 193],
  ];
  text_4244_4229.x = 147;
  text_4244_4229.y = 193;

  // Font properties
  text_4244_4229.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_4244_4229.characters = "PLACEHOLDER";
  text_4244_4229.fontSize = 17;
  text_4244_4229.listSpacing = 0;
  text_4244_4229.lineHeight = { unit: "PERCENT", value: 150 };
  text_4244_4229.fontName = { family: "Roboto", style: "Bold" };
  text_4244_4229.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create FRAME
  var frame_4244_4230 = figma.createFrame();
  frame_4244_4227.appendChild(frame_4244_4230);
  frame_4244_4230.resize(411.0, 123.0);
  frame_4244_4230.primaryAxisSizingMode = "AUTO";
  frame_4244_4230.name = "Content";
  frame_4244_4230.relativeTransform = [
    [1, 0, 0],
    [0, 1, 434],
  ];
  frame_4244_4230.y = 434;
  frame_4244_4230.layoutAlign = "STRETCH";
  frame_4244_4230.fills = [];
  frame_4244_4230.counterAxisAlignItems = "CENTER";
  frame_4244_4230.strokeTopWeight = 1;
  frame_4244_4230.strokeBottomWeight = 1;
  frame_4244_4230.strokeLeftWeight = 1;
  frame_4244_4230.strokeRightWeight = 1;
  frame_4244_4230.clipsContent = false;
  frame_4244_4230.itemSpacing = 16;

  // Create FRAME
  var frame_4244_4231 = figma.createFrame();
  frame_4244_4230.appendChild(frame_4244_4231);
  frame_4244_4231.resize(411.0, 58.0);
  frame_4244_4231.primaryAxisSizingMode = "AUTO";
  frame_4244_4231.name = "Title";
  frame_4244_4231.layoutAlign = "STRETCH";
  frame_4244_4231.fills = [];
  frame_4244_4231.counterAxisAlignItems = "CENTER";
  frame_4244_4231.strokeTopWeight = 1;
  frame_4244_4231.strokeBottomWeight = 1;
  frame_4244_4231.strokeLeftWeight = 1;
  frame_4244_4231.strokeRightWeight = 1;
  frame_4244_4231.clipsContent = false;
  frame_4244_4231.layoutMode = "VERTICAL";

  // Create TEXT
  var text_4244_4232 = figma.createText();
  frame_4244_4231.appendChild(text_4244_4232);
  text_4244_4232.fillStyleId = black_4902.id;
  text_4244_4232.resize(92.0, 32.0);
  text_4244_4232.name = "Name";
  text_4244_4232.relativeTransform = [
    [1, 0, 159.5],
    [0, 1, 0],
  ];
  text_4244_4232.x = 159.5;
  text_4244_4232.autoRename = false;

  // Font properties
  text_4244_4232.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_4244_4232.characters = "Full name";
  text_4244_4232.fontSize = 21;
  text_4244_4232.listSpacing = 0;
  text_4244_4232.lineHeight = { unit: "PERCENT", value: 150 };
  text_4244_4232.fontName = { family: "Roboto", style: "Bold" };
  text_4244_4232.textAutoResize = "HEIGHT";

  // Create TEXT
  var text_4244_4233 = figma.createText();
  frame_4244_4231.appendChild(text_4244_4233);
  text_4244_4233.fillStyleId = black_4902.id;
  text_4244_4233.resize(62.0, 26.0);
  text_4244_4233.name = "Job Title";
  text_4244_4233.relativeTransform = [
    [1, 0, 174.5],
    [0, 1, 32],
  ];
  text_4244_4233.x = 174.5;
  text_4244_4233.y = 32;
  text_4244_4233.autoRename = false;

  // Font properties
  text_4244_4233.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4244_4233.characters = "Job title";
  text_4244_4233.fontSize = 17;
  text_4244_4233.listSpacing = 0;
  text_4244_4233.lineHeight = { unit: "PERCENT", value: 150 };
  text_4244_4233.textAutoResize = "HEIGHT";

  // Create TEXT
  var text_4244_4234 = figma.createText();
  frame_4244_4230.appendChild(text_4244_4234);
  text_4244_4234.fillStyleId = black_4902.id;
  text_4244_4234.resize(411.0, 52.0);
  text_4244_4234.relativeTransform = [
    [1, 0, 0],
    [0, 1, 75],
  ];
  text_4244_4234.y = 75;
  text_4244_4234.layoutAlign = "STRETCH";
  text_4244_4234.autoRename = false;

  // Font properties
  text_4244_4234.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4244_4234.characters =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum.";
  text_4244_4234.fontSize = 17;
  text_4244_4234.listSpacing = 0;
  text_4244_4234.lineHeight = { unit: "PERCENT", value: 150 };
  text_4244_4234.textAutoResize = "HEIGHT";

  // Create FRAME
  var frame_4244_4235 = figma.createFrame();
  frame_4244_4227.appendChild(frame_4244_4235);
  frame_4244_4235.resize(100.0, 24.0);
  frame_4244_4235.primaryAxisSizingMode = "AUTO";
  frame_4244_4235.counterAxisSizingMode = "AUTO";
  frame_4244_4235.name = "Social Icons";
  frame_4244_4235.relativeTransform = [
    [1, 0, 155.5],
    [0, 1, 630],
  ];
  frame_4244_4235.x = 155.5;
  frame_4244_4235.y = 630;
  frame_4244_4235.fills = [];
  frame_4244_4235.strokeTopWeight = 1;
  frame_4244_4235.strokeBottomWeight = 1;
  frame_4244_4235.strokeLeftWeight = 1;
  frame_4244_4235.strokeRightWeight = 1;
  frame_4244_4235.clipsContent = false;
  frame_4244_4235.layoutMode = "HORIZONTAL";
  frame_4244_4235.counterAxisSizingMode = "AUTO";
  frame_4244_4235.itemSpacing = 14;

  // Create FRAME
  var frame_4244_4378 = figma.createFrame();
  frame_4244_3749.appendChild(frame_4244_4378);
  frame_4244_4378.resize(1312.0, 775.0);
  frame_4244_4378.primaryAxisSizingMode = "AUTO";
  frame_4244_4378.name = "Content";
  frame_4244_4378.relativeTransform = [
    [1, 0, 64],
    [0, 1, 998],
  ];
  frame_4244_4378.x = 64;
  frame_4244_4378.y = 998;
  frame_4244_4378.layoutAlign = "STRETCH";
  frame_4244_4378.fills = [];
  frame_4244_4378.counterAxisAlignItems = "CENTER";
  frame_4244_4378.strokeTopWeight = 1;
  frame_4244_4378.strokeBottomWeight = 1;
  frame_4244_4378.strokeLeftWeight = 1;
  frame_4244_4378.strokeRightWeight = 1;
  frame_4244_4378.clipsContent = false;
  frame_4244_4378.layoutMode = "VERTICAL";
  frame_4244_4378.itemSpacing = 96;

  // Create FRAME
  var frame_4244_4379 = figma.createFrame();
  frame_4244_4378.appendChild(frame_4244_4379);
  frame_4244_4379.resize(1312.0, 588.0);
  frame_4244_4379.primaryAxisSizingMode = "AUTO";
  frame_4244_4379.name = "Content";
  frame_4244_4379.layoutAlign = "STRETCH";
  frame_4244_4379.fills = [];
  frame_4244_4379.strokeTopWeight = 1;
  frame_4244_4379.strokeBottomWeight = 1;
  frame_4244_4379.strokeLeftWeight = 1;
  frame_4244_4379.strokeRightWeight = 1;
  frame_4244_4379.clipsContent = false;
  frame_4244_4379.expanded = false;
  frame_4244_4379.itemSpacing = 64;

  // Create FRAME
  var frame_4244_4380 = figma.createFrame();
  frame_4244_4379.appendChild(frame_4244_4380);
  frame_4244_4380.resize(411.0, 588.0);
  frame_4244_4380.name = "Row";
  frame_4244_4380.fills = [];
  frame_4244_4380.primaryAxisSizingMode = "FIXED";
  frame_4244_4380.strokeTopWeight = 1;
  frame_4244_4380.strokeBottomWeight = 1;
  frame_4244_4380.strokeLeftWeight = 1;
  frame_4244_4380.strokeRightWeight = 1;
  frame_4244_4380.clipsContent = false;
  frame_4244_4380.expanded = false;
  frame_4244_4380.itemSpacing = 48;

  // Create FRAME
  var frame_4244_4381 = figma.createFrame();
  frame_4244_4380.appendChild(frame_4244_4381);
  frame_4244_4381.resize(411.0, 588.0);
  frame_4244_4381.primaryAxisSizingMode = "AUTO";
  frame_4244_4381.name = "Card";
  frame_4244_4381.layoutGrow = 1;
  frame_4244_4381.fills = [];
  frame_4244_4381.counterAxisAlignItems = "CENTER";
  frame_4244_4381.strokeTopWeight = 1;
  frame_4244_4381.strokeBottomWeight = 1;
  frame_4244_4381.strokeLeftWeight = 1;
  frame_4244_4381.strokeRightWeight = 1;
  frame_4244_4381.clipsContent = false;
  frame_4244_4381.itemSpacing = 24;

  // Create RECTANGLE
  var rectangle_4244_4382 = figma.createRectangle();
  frame_4244_4381.appendChild(rectangle_4244_4382);
  rectangle_4244_4382.resize(411.0, 411.0);
  rectangle_4244_4382.name = "Rectangle 1";
  rectangle_4244_4382.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        r: 0.8509804010391235,
        g: 0.8509804010391235,
        b: 0.8509804010391235,
      },
      boundVariables: {},
    },
  ];
  rectangle_4244_4382.constrainProportions = true;
  rectangle_4244_4382.strokeTopWeight = 1;
  rectangle_4244_4382.strokeBottomWeight = 1;
  rectangle_4244_4382.strokeLeftWeight = 1;
  rectangle_4244_4382.strokeRightWeight = 1;

  // Create TEXT
  var text_4244_4383 = figma.createText();
  frame_4244_4381.appendChild(text_4244_4383);
  text_4244_4383.resize(117.0, 26.0);
  text_4244_4383.name = "PLACEHOLDER";
  text_4244_4383.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 0, g: 0, b: 0 },
      boundVariables: {},
    },
  ];
  text_4244_4383.relativeTransform = [
    [1, 0, 147],
    [0, 1, 193],
  ];
  text_4244_4383.x = 147;
  text_4244_4383.y = 193;

  // Font properties
  text_4244_4383.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_4244_4383.characters = "PLACEHOLDER";
  text_4244_4383.fontSize = 17;
  text_4244_4383.listSpacing = 0;
  text_4244_4383.lineHeight = { unit: "PERCENT", value: 150 };
  text_4244_4383.fontName = { family: "Roboto", style: "Bold" };
  text_4244_4383.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create FRAME
  var frame_4244_4384 = figma.createFrame();
  frame_4244_4381.appendChild(frame_4244_4384);
  frame_4244_4384.resize(411.0, 123.0);
  frame_4244_4384.primaryAxisSizingMode = "AUTO";
  frame_4244_4384.name = "Content";
  frame_4244_4384.relativeTransform = [
    [1, 0, 0],
    [0, 1, 434],
  ];
  frame_4244_4384.y = 434;
  frame_4244_4384.layoutAlign = "STRETCH";
  frame_4244_4384.fills = [];
  frame_4244_4384.counterAxisAlignItems = "CENTER";
  frame_4244_4384.strokeTopWeight = 1;
  frame_4244_4384.strokeBottomWeight = 1;
  frame_4244_4384.strokeLeftWeight = 1;
  frame_4244_4384.strokeRightWeight = 1;
  frame_4244_4384.clipsContent = false;
  frame_4244_4384.itemSpacing = 16;

  // Create FRAME
  var frame_4244_4385 = figma.createFrame();
  frame_4244_4384.appendChild(frame_4244_4385);
  frame_4244_4385.resize(411.0, 58.0);
  frame_4244_4385.primaryAxisSizingMode = "AUTO";
  frame_4244_4385.name = "Title";
  frame_4244_4385.layoutAlign = "STRETCH";
  frame_4244_4385.fills = [];
  frame_4244_4385.counterAxisAlignItems = "CENTER";
  frame_4244_4385.strokeTopWeight = 1;
  frame_4244_4385.strokeBottomWeight = 1;
  frame_4244_4385.strokeLeftWeight = 1;
  frame_4244_4385.strokeRightWeight = 1;
  frame_4244_4385.clipsContent = false;
  frame_4244_4385.layoutMode = "VERTICAL";

  // Create TEXT
  var text_4244_4386 = figma.createText();
  frame_4244_4385.appendChild(text_4244_4386);
  text_4244_4386.fillStyleId = black_4902.id;
  text_4244_4386.resize(92.0, 32.0);
  text_4244_4386.name = "Name";
  text_4244_4386.relativeTransform = [
    [1, 0, 159.5],
    [0, 1, 0],
  ];
  text_4244_4386.x = 159.5;
  text_4244_4386.autoRename = false;

  // Font properties
  text_4244_4386.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_4244_4386.characters = "Full name";
  text_4244_4386.fontSize = 21;
  text_4244_4386.listSpacing = 0;
  text_4244_4386.lineHeight = { unit: "PERCENT", value: 150 };
  text_4244_4386.fontName = { family: "Roboto", style: "Bold" };
  text_4244_4386.textAutoResize = "HEIGHT";

  // Create TEXT
  var text_4244_4387 = figma.createText();
  frame_4244_4385.appendChild(text_4244_4387);
  text_4244_4387.fillStyleId = black_4902.id;
  text_4244_4387.resize(62.0, 26.0);
  text_4244_4387.name = "Job Title";
  text_4244_4387.relativeTransform = [
    [1, 0, 174.5],
    [0, 1, 32],
  ];
  text_4244_4387.x = 174.5;
  text_4244_4387.y = 32;
  text_4244_4387.autoRename = false;

  // Font properties
  text_4244_4387.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4244_4387.characters = "Job title";
  text_4244_4387.fontSize = 17;
  text_4244_4387.listSpacing = 0;
  text_4244_4387.lineHeight = { unit: "PERCENT", value: 150 };
  text_4244_4387.textAutoResize = "HEIGHT";

  // Create TEXT
  var text_4244_4388 = figma.createText();
  frame_4244_4384.appendChild(text_4244_4388);
  text_4244_4388.fillStyleId = black_4902.id;
  text_4244_4388.resize(411.0, 52.0);
  text_4244_4388.relativeTransform = [
    [1, 0, 0],
    [0, 1, 75],
  ];
  text_4244_4388.y = 75;
  text_4244_4388.layoutAlign = "STRETCH";
  text_4244_4388.autoRename = false;

  // Font properties
  text_4244_4388.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4244_4388.characters =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum.";
  text_4244_4388.fontSize = 17;
  text_4244_4388.listSpacing = 0;
  text_4244_4388.lineHeight = { unit: "PERCENT", value: 150 };
  text_4244_4388.textAutoResize = "HEIGHT";

  // Create FRAME
  var frame_4244_4389 = figma.createFrame();
  frame_4244_4381.appendChild(frame_4244_4389);
  frame_4244_4389.resize(100.0, 24.0);
  frame_4244_4389.primaryAxisSizingMode = "AUTO";
  frame_4244_4389.counterAxisSizingMode = "AUTO";
  frame_4244_4389.name = "Social Icons";
  frame_4244_4389.relativeTransform = [
    [1, 0, 155.5],
    [0, 1, 630],
  ];
  frame_4244_4389.x = 155.5;
  frame_4244_4389.y = 630;
  frame_4244_4389.fills = [];
  frame_4244_4389.strokeTopWeight = 1;
  frame_4244_4389.strokeBottomWeight = 1;
  frame_4244_4389.strokeLeftWeight = 1;
  frame_4244_4389.strokeRightWeight = 1;
  frame_4244_4389.clipsContent = false;
  frame_4244_4389.layoutMode = "HORIZONTAL";
  frame_4244_4389.counterAxisSizingMode = "AUTO";
  frame_4244_4389.itemSpacing = 14;

  // Create FRAME
  var frame_4244_4412 = figma.createFrame();
  frame_4244_4379.appendChild(frame_4244_4412);
  frame_4244_4412.resize(411.0, 588.0);
  frame_4244_4412.name = "Row";
  frame_4244_4412.relativeTransform = [
    [1, 0, 450],
    [0, 1, 0],
  ];
  frame_4244_4412.x = 450;
  frame_4244_4412.fills = [];
  frame_4244_4412.primaryAxisSizingMode = "FIXED";
  frame_4244_4412.strokeTopWeight = 1;
  frame_4244_4412.strokeBottomWeight = 1;
  frame_4244_4412.strokeLeftWeight = 1;
  frame_4244_4412.strokeRightWeight = 1;
  frame_4244_4412.clipsContent = false;
  frame_4244_4412.expanded = false;
  frame_4244_4412.itemSpacing = 48;

  // Create FRAME
  var frame_4244_4413 = figma.createFrame();
  frame_4244_4412.appendChild(frame_4244_4413);
  frame_4244_4413.resize(411.0, 588.0);
  frame_4244_4413.primaryAxisSizingMode = "AUTO";
  frame_4244_4413.name = "Card";
  frame_4244_4413.layoutGrow = 1;
  frame_4244_4413.fills = [];
  frame_4244_4413.counterAxisAlignItems = "CENTER";
  frame_4244_4413.strokeTopWeight = 1;
  frame_4244_4413.strokeBottomWeight = 1;
  frame_4244_4413.strokeLeftWeight = 1;
  frame_4244_4413.strokeRightWeight = 1;
  frame_4244_4413.clipsContent = false;
  frame_4244_4413.expanded = false;
  frame_4244_4413.itemSpacing = 24;

  // Create RECTANGLE
  var rectangle_4244_4414 = figma.createRectangle();
  frame_4244_4413.appendChild(rectangle_4244_4414);
  rectangle_4244_4414.resize(411.0, 411.0);
  rectangle_4244_4414.name = "Rectangle 1";
  rectangle_4244_4414.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        r: 0.8509804010391235,
        g: 0.8509804010391235,
        b: 0.8509804010391235,
      },
      boundVariables: {},
    },
  ];
  rectangle_4244_4414.constrainProportions = true;
  rectangle_4244_4414.strokeTopWeight = 1;
  rectangle_4244_4414.strokeBottomWeight = 1;
  rectangle_4244_4414.strokeLeftWeight = 1;
  rectangle_4244_4414.strokeRightWeight = 1;

  // Create TEXT
  var text_4244_4415 = figma.createText();
  frame_4244_4413.appendChild(text_4244_4415);
  text_4244_4415.resize(117.0, 26.0);
  text_4244_4415.name = "PLACEHOLDER";
  text_4244_4415.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 0, g: 0, b: 0 },
      boundVariables: {},
    },
  ];
  text_4244_4415.relativeTransform = [
    [1, 0, 147],
    [0, 1, 193],
  ];
  text_4244_4415.x = 147;
  text_4244_4415.y = 193;

  // Font properties
  text_4244_4415.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_4244_4415.characters = "PLACEHOLDER";
  text_4244_4415.fontSize = 17;
  text_4244_4415.listSpacing = 0;
  text_4244_4415.lineHeight = { unit: "PERCENT", value: 150 };
  text_4244_4415.fontName = { family: "Roboto", style: "Bold" };
  text_4244_4415.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create FRAME
  var frame_4244_4416 = figma.createFrame();
  frame_4244_4413.appendChild(frame_4244_4416);
  frame_4244_4416.resize(411.0, 123.0);
  frame_4244_4416.primaryAxisSizingMode = "AUTO";
  frame_4244_4416.name = "Content";
  frame_4244_4416.relativeTransform = [
    [1, 0, 0],
    [0, 1, 434],
  ];
  frame_4244_4416.y = 434;
  frame_4244_4416.layoutAlign = "STRETCH";
  frame_4244_4416.fills = [];
  frame_4244_4416.counterAxisAlignItems = "CENTER";
  frame_4244_4416.strokeTopWeight = 1;
  frame_4244_4416.strokeBottomWeight = 1;
  frame_4244_4416.strokeLeftWeight = 1;
  frame_4244_4416.strokeRightWeight = 1;
  frame_4244_4416.clipsContent = false;
  frame_4244_4416.itemSpacing = 16;

  // Create FRAME
  var frame_4244_4417 = figma.createFrame();
  frame_4244_4416.appendChild(frame_4244_4417);
  frame_4244_4417.resize(411.0, 58.0);
  frame_4244_4417.primaryAxisSizingMode = "AUTO";
  frame_4244_4417.name = "Title";
  frame_4244_4417.layoutAlign = "STRETCH";
  frame_4244_4417.fills = [];
  frame_4244_4417.counterAxisAlignItems = "CENTER";
  frame_4244_4417.strokeTopWeight = 1;
  frame_4244_4417.strokeBottomWeight = 1;
  frame_4244_4417.strokeLeftWeight = 1;
  frame_4244_4417.strokeRightWeight = 1;
  frame_4244_4417.clipsContent = false;
  frame_4244_4417.layoutMode = "VERTICAL";

  // Create TEXT
  var text_4244_4418 = figma.createText();
  frame_4244_4417.appendChild(text_4244_4418);
  text_4244_4418.fillStyleId = black_4902.id;
  text_4244_4418.resize(92.0, 32.0);
  text_4244_4418.name = "Name";
  text_4244_4418.relativeTransform = [
    [1, 0, 159.5],
    [0, 1, 0],
  ];
  text_4244_4418.x = 159.5;
  text_4244_4418.autoRename = false;

  // Font properties
  text_4244_4418.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_4244_4418.characters = "Full name";
  text_4244_4418.fontSize = 21;
  text_4244_4418.listSpacing = 0;
  text_4244_4418.lineHeight = { unit: "PERCENT", value: 150 };
  text_4244_4418.fontName = { family: "Roboto", style: "Bold" };
  text_4244_4418.textAutoResize = "HEIGHT";

  // Create TEXT
  var text_4244_4419 = figma.createText();
  frame_4244_4417.appendChild(text_4244_4419);
  text_4244_4419.fillStyleId = black_4902.id;
  text_4244_4419.resize(62.0, 26.0);
  text_4244_4419.name = "Job Title";
  text_4244_4419.relativeTransform = [
    [1, 0, 174.5],
    [0, 1, 32],
  ];
  text_4244_4419.x = 174.5;
  text_4244_4419.y = 32;
  text_4244_4419.autoRename = false;

  // Font properties
  text_4244_4419.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4244_4419.characters = "Job title";
  text_4244_4419.fontSize = 17;
  text_4244_4419.listSpacing = 0;
  text_4244_4419.lineHeight = { unit: "PERCENT", value: 150 };
  text_4244_4419.textAutoResize = "HEIGHT";

  // Create TEXT
  var text_4244_4420 = figma.createText();
  frame_4244_4416.appendChild(text_4244_4420);
  text_4244_4420.fillStyleId = black_4902.id;
  text_4244_4420.resize(411.0, 52.0);
  text_4244_4420.relativeTransform = [
    [1, 0, 0],
    [0, 1, 75],
  ];
  text_4244_4420.y = 75;
  text_4244_4420.layoutAlign = "STRETCH";
  text_4244_4420.autoRename = false;

  // Font properties
  text_4244_4420.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4244_4420.characters =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum.";
  text_4244_4420.fontSize = 17;
  text_4244_4420.listSpacing = 0;
  text_4244_4420.lineHeight = { unit: "PERCENT", value: 150 };
  text_4244_4420.textAutoResize = "HEIGHT";

  // Create FRAME
  var frame_4244_4421 = figma.createFrame();
  frame_4244_4413.appendChild(frame_4244_4421);
  frame_4244_4421.resize(100.0, 24.0);
  frame_4244_4421.primaryAxisSizingMode = "AUTO";
  frame_4244_4421.counterAxisSizingMode = "AUTO";
  frame_4244_4421.name = "Social Icons";
  frame_4244_4421.relativeTransform = [
    [1, 0, 155.5],
    [0, 1, 630],
  ];
  frame_4244_4421.x = 155.5;
  frame_4244_4421.y = 630;
  frame_4244_4421.fills = [];
  frame_4244_4421.strokeTopWeight = 1;
  frame_4244_4421.strokeBottomWeight = 1;
  frame_4244_4421.strokeLeftWeight = 1;
  frame_4244_4421.strokeRightWeight = 1;
  frame_4244_4421.clipsContent = false;
  frame_4244_4421.layoutMode = "HORIZONTAL";
  frame_4244_4421.counterAxisSizingMode = "AUTO";
  frame_4244_4421.itemSpacing = 14;

  // Create FRAME
  var frame_4244_4444 = figma.createFrame();
  frame_4244_4379.appendChild(frame_4244_4444);
  frame_4244_4444.resize(411.0, 588.0);
  frame_4244_4444.name = "Row";
  frame_4244_4444.relativeTransform = [
    [1, 0, 900],
    [0, 1, 0],
  ];
  frame_4244_4444.x = 900;
  frame_4244_4444.fills = [];
  frame_4244_4444.primaryAxisSizingMode = "FIXED";
  frame_4244_4444.strokeTopWeight = 1;
  frame_4244_4444.strokeBottomWeight = 1;
  frame_4244_4444.strokeLeftWeight = 1;
  frame_4244_4444.strokeRightWeight = 1;
  frame_4244_4444.clipsContent = false;
  frame_4244_4444.expanded = false;
  frame_4244_4444.itemSpacing = 48;

  // Create FRAME
  var frame_4244_4445 = figma.createFrame();
  frame_4244_4444.appendChild(frame_4244_4445);
  frame_4244_4445.resize(411.0, 588.0);
  frame_4244_4445.primaryAxisSizingMode = "AUTO";
  frame_4244_4445.name = "Card";
  frame_4244_4445.layoutGrow = 1;
  frame_4244_4445.fills = [];
  frame_4244_4445.counterAxisAlignItems = "CENTER";
  frame_4244_4445.strokeTopWeight = 1;
  frame_4244_4445.strokeBottomWeight = 1;
  frame_4244_4445.strokeLeftWeight = 1;
  frame_4244_4445.strokeRightWeight = 1;
  frame_4244_4445.clipsContent = false;
  frame_4244_4445.itemSpacing = 24;

  // Create RECTANGLE
  var rectangle_4244_4446 = figma.createRectangle();
  frame_4244_4445.appendChild(rectangle_4244_4446);
  rectangle_4244_4446.resize(411.0, 411.0);
  rectangle_4244_4446.name = "Rectangle 1";
  rectangle_4244_4446.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        r: 0.8509804010391235,
        g: 0.8509804010391235,
        b: 0.8509804010391235,
      },
      boundVariables: {},
    },
  ];
  rectangle_4244_4446.constrainProportions = true;
  rectangle_4244_4446.strokeTopWeight = 1;
  rectangle_4244_4446.strokeBottomWeight = 1;
  rectangle_4244_4446.strokeLeftWeight = 1;
  rectangle_4244_4446.strokeRightWeight = 1;

  // Create TEXT
  var text_4244_4447 = figma.createText();
  frame_4244_4445.appendChild(text_4244_4447);
  text_4244_4447.resize(117.0, 26.0);
  text_4244_4447.name = "PLACEHOLDER";
  text_4244_4447.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 0, g: 0, b: 0 },
      boundVariables: {},
    },
  ];
  text_4244_4447.relativeTransform = [
    [1, 0, 147],
    [0, 1, 193],
  ];
  text_4244_4447.x = 147;
  text_4244_4447.y = 193;

  // Font properties
  text_4244_4447.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_4244_4447.characters = "PLACEHOLDER";
  text_4244_4447.fontSize = 17;
  text_4244_4447.listSpacing = 0;
  text_4244_4447.lineHeight = { unit: "PERCENT", value: 150 };
  text_4244_4447.fontName = { family: "Roboto", style: "Bold" };
  text_4244_4447.textAutoResize = "WIDTH_AND_HEIGHT";

  // Create FRAME
  var frame_4244_4448 = figma.createFrame();
  frame_4244_4445.appendChild(frame_4244_4448);
  frame_4244_4448.resize(411.0, 123.0);
  frame_4244_4448.primaryAxisSizingMode = "AUTO";
  frame_4244_4448.name = "Content";
  frame_4244_4448.relativeTransform = [
    [1, 0, 0],
    [0, 1, 434],
  ];
  frame_4244_4448.y = 434;
  frame_4244_4448.layoutAlign = "STRETCH";
  frame_4244_4448.fills = [];
  frame_4244_4448.counterAxisAlignItems = "CENTER";
  frame_4244_4448.strokeTopWeight = 1;
  frame_4244_4448.strokeBottomWeight = 1;
  frame_4244_4448.strokeLeftWeight = 1;
  frame_4244_4448.strokeRightWeight = 1;
  frame_4244_4448.clipsContent = false;
  frame_4244_4448.itemSpacing = 16;

  // Create FRAME
  var frame_4244_4449 = figma.createFrame();
  frame_4244_4448.appendChild(frame_4244_4449);
  frame_4244_4449.resize(411.0, 58.0);
  frame_4244_4449.primaryAxisSizingMode = "AUTO";
  frame_4244_4449.name = "Title";
  frame_4244_4449.layoutAlign = "STRETCH";
  frame_4244_4449.fills = [];
  frame_4244_4449.counterAxisAlignItems = "CENTER";
  frame_4244_4449.strokeTopWeight = 1;
  frame_4244_4449.strokeBottomWeight = 1;
  frame_4244_4449.strokeLeftWeight = 1;
  frame_4244_4449.strokeRightWeight = 1;
  frame_4244_4449.clipsContent = false;
  frame_4244_4449.layoutMode = "VERTICAL";

  // Create TEXT
  var text_4244_4450 = figma.createText();
  frame_4244_4449.appendChild(text_4244_4450);
  text_4244_4450.fillStyleId = black_4902.id;
  text_4244_4450.resize(92.0, 32.0);
  text_4244_4450.name = "Name";
  text_4244_4450.relativeTransform = [
    [1, 0, 159.5],
    [0, 1, 0],
  ];
  text_4244_4450.x = 159.5;
  text_4244_4450.autoRename = false;

  // Font properties
  text_4244_4450.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_4244_4450.characters = "Full name";
  text_4244_4450.fontSize = 21;
  text_4244_4450.listSpacing = 0;
  text_4244_4450.lineHeight = { unit: "PERCENT", value: 150 };
  text_4244_4450.fontName = { family: "Roboto", style: "Bold" };
  text_4244_4450.textAutoResize = "HEIGHT";

  // Create TEXT
  var text_4244_4451 = figma.createText();
  frame_4244_4449.appendChild(text_4244_4451);
  text_4244_4451.fillStyleId = black_4902.id;
  text_4244_4451.resize(62.0, 26.0);
  text_4244_4451.name = "Job Title";
  text_4244_4451.relativeTransform = [
    [1, 0, 174.5],
    [0, 1, 32],
  ];
  text_4244_4451.x = 174.5;
  text_4244_4451.y = 32;
  text_4244_4451.autoRename = false;

  // Font properties
  text_4244_4451.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4244_4451.characters = "Job title";
  text_4244_4451.fontSize = 17;
  text_4244_4451.listSpacing = 0;
  text_4244_4451.lineHeight = { unit: "PERCENT", value: 150 };
  text_4244_4451.textAutoResize = "HEIGHT";

  // Create TEXT
  var text_4244_4452 = figma.createText();
  frame_4244_4448.appendChild(text_4244_4452);
  text_4244_4452.fillStyleId = black_4902.id;
  text_4244_4452.resize(411.0, 52.0);
  text_4244_4452.relativeTransform = [
    [1, 0, 0],
    [0, 1, 75],
  ];
  text_4244_4452.y = 75;
  text_4244_4452.layoutAlign = "STRETCH";
  text_4244_4452.autoRename = false;

  // Font properties
  text_4244_4452.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4244_4452.characters =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum.";
  text_4244_4452.fontSize = 17;
  text_4244_4452.listSpacing = 0;
  text_4244_4452.lineHeight = { unit: "PERCENT", value: 150 };
  text_4244_4452.textAutoResize = "HEIGHT";

  // Create FRAME
  var frame_4244_4453 = figma.createFrame();
  frame_4244_4445.appendChild(frame_4244_4453);
  frame_4244_4453.resize(100.0, 24.0);
  frame_4244_4453.primaryAxisSizingMode = "AUTO";
  frame_4244_4453.counterAxisSizingMode = "AUTO";
  frame_4244_4453.name = "Social Icons";
  frame_4244_4453.relativeTransform = [
    [1, 0, 155.5],
    [0, 1, 630],
  ];
  frame_4244_4453.x = 155.5;
  frame_4244_4453.y = 630;
  frame_4244_4453.fills = [];
  frame_4244_4453.strokeTopWeight = 1;
  frame_4244_4453.strokeBottomWeight = 1;
  frame_4244_4453.strokeLeftWeight = 1;
  frame_4244_4453.strokeRightWeight = 1;
  frame_4244_4453.clipsContent = false;
  frame_4244_4453.layoutMode = "HORIZONTAL";
  frame_4244_4453.counterAxisSizingMode = "AUTO";
  frame_4244_4453.itemSpacing = 14;

  // Create FRAME
  var frame_4244_4510 = figma.createFrame();
  frame_4244_4378.appendChild(frame_4244_4510);
  frame_4244_4510.resize(426.0, 91.0);
  frame_4244_4510.primaryAxisSizingMode = "AUTO";
  frame_4244_4510.name = "Content";
  frame_4244_4510.relativeTransform = [
    [1, 0, 443],
    [0, 1, 684],
  ];
  frame_4244_4510.x = 443;
  frame_4244_4510.y = 684;
  frame_4244_4510.fills = [];
  frame_4244_4510.counterAxisAlignItems = "CENTER";
  frame_4244_4510.strokeTopWeight = 1;
  frame_4244_4510.strokeBottomWeight = 1;
  frame_4244_4510.strokeLeftWeight = 1;
  frame_4244_4510.strokeRightWeight = 1;
  frame_4244_4510.clipsContent = false;
  frame_4244_4510.layoutMode = "VERTICAL";
  frame_4244_4510.itemSpacing = 24;

  // Create FRAME
  var frame_4244_4511 = figma.createFrame();
  frame_4244_4510.appendChild(frame_4244_4511);
  frame_4244_4511.resize(768.0, 91.0);
  frame_4244_4511.primaryAxisSizingMode = "AUTO";
  frame_4244_4511.name = "Content";
  frame_4244_4511.relativeTransform = [
    [1, 0, -171],
    [0, 1, 0],
  ];
  frame_4244_4511.x = -171;
  frame_4244_4511.fills = [];
  frame_4244_4511.counterAxisAlignItems = "CENTER";
  frame_4244_4511.strokeTopWeight = 1;
  frame_4244_4511.strokeBottomWeight = 1;
  frame_4244_4511.strokeLeftWeight = 1;
  frame_4244_4511.strokeRightWeight = 1;
  frame_4244_4511.clipsContent = false;
  frame_4244_4511.itemSpacing = 16;

  // Create TEXT
  var text_4244_4512 = figma.createText();
  frame_4244_4511.appendChild(text_4244_4512);
  text_4244_4512.fillStyleId = black_4902.id;
  text_4244_4512.resize(180.0, 48.0);
  text_4244_4512.name = "Heading";
  text_4244_4512.relativeTransform = [
    [1, 0, 294],
    [0, 1, 0],
  ];
  text_4244_4512.x = 294;
  text_4244_4512.layoutAlign = "STRETCH";
  text_4244_4512.autoRename = false;

  // Font properties
  text_4244_4512.fontName = {
    family: "Roboto",
    style: "Bold",
  };
  text_4244_4512.characters = "We’re hiring!";
  text_4244_4512.fontSize = 32;
  text_4244_4512.listSpacing = 0;
  text_4244_4512.lineHeight = { unit: "PERCENT", value: 150 };
  text_4244_4512.fontName = { family: "Roboto", style: "Bold" };
  text_4244_4512.textAutoResize = "HEIGHT";

  // Create TEXT
  var text_4244_4513 = figma.createText();
  frame_4244_4511.appendChild(text_4244_4513);
  text_4244_4513.fillStyleId = black_4902.id;
  text_4244_4513.resize(419.0, 26.0);
  text_4244_4513.relativeTransform = [
    [1, 0, 174],
    [0, 1, 65],
  ];
  text_4244_4513.x = 174;
  text_4244_4513.y = 65;
  text_4244_4513.layoutAlign = "STRETCH";
  text_4244_4513.autoRename = false;

  // Font properties
  text_4244_4513.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4244_4513.characters =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ";
  text_4244_4513.fontSize = 17;
  text_4244_4513.listSpacing = 0;
  text_4244_4513.lineHeight = { unit: "PERCENT", value: 150 };
  text_4244_4513.textAutoResize = "HEIGHT";

  // Create RECTANGLE
  var rectangle_4244_5404 = figma.createRectangle();
  frame_4244_3749.appendChild(rectangle_4244_5404);
  rectangle_4244_5404.resize(155.0, 44.0);
  rectangle_4244_5404.name = "Rectangle 2";
  rectangle_4244_5404.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 1, g: 1, b: 1 },
      boundVariables: {},
    },
  ];
  rectangle_4244_5404.strokes = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 0, g: 0, b: 0 },
      boundVariables: {},
    },
  ];
  rectangle_4244_5404.relativeTransform = [
    [1, 0, 642],
    [0, 1, 1790],
  ];
  rectangle_4244_5404.x = 642;
  rectangle_4244_5404.y = 1790;
  rectangle_4244_5404.strokeTopWeight = 1;
  rectangle_4244_5404.strokeBottomWeight = 1;
  rectangle_4244_5404.strokeLeftWeight = 1;
  rectangle_4244_5404.strokeRightWeight = 1;

  // Create TEXT
  var text_4244_5405 = figma.createText();
  frame_4244_3749.appendChild(text_4244_5405);
  text_4244_5405.resize(114.0, 26.0);
  text_4244_5405.name = "Open positions";
  text_4244_5405.fills = [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: { r: 0, g: 0, b: 0 },
      boundVariables: {},
    },
  ];
  text_4244_5405.relativeTransform = [
    [1, 0, 663],
    [0, 1, 1799],
  ];
  text_4244_5405.x = 663;
  text_4244_5405.y = 1799;

  // Font properties
  text_4244_5405.fontName = {
    family: "Roboto",
    style: "Regular",
  };
  text_4244_5405.characters = "Open positions";
  text_4244_5405.fontSize = 17;
  text_4244_5405.listSpacing = 0;
  text_4244_5405.lineHeight = { unit: "PERCENT", value: 150 };
  text_4244_5405.textAutoResize = "WIDTH_AND_HEIGHT";
};
