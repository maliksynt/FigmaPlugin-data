figma.showUI(__html__);

figma.ui.onmessage = async (msg) => {
  if (msg.type === "create-rectangles") {
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
  }
  // STOP HERE AND DELETE MAIN() ###############################################################
  figma.closePlugin();
};
