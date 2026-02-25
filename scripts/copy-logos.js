const fs = require("fs");
const path = require("path");

const assetsBase = path.join(
  process.env.USERPROFILE || "",
  ".cursor",
  "projects",
  "d-Azure-Repos-Ambit",
  "assets"
);
const publicDir = path.join(__dirname, "..", "public");

const logos = [
  {
    src: "c__Users_Abhigyan.Pandey_AppData_Roaming_Cursor_User_workspaceStorage_2fd82f126954e51ec3944e08e83f469c_images_ambit_logo-2c820fe3-462c-43a5-9c77-dcb524930d88.png",
    dest: "ambit-logo.png",
  },
  {
    src: "c__Users_Abhigyan.Pandey_AppData_Roaming_Cursor_User_workspaceStorage_2fd82f126954e51ec3944e08e83f469c_images_Bajaj_Health_Logo-50ca0a7e-e0d7-45f0-b9a3-1eee6b4fbc61.png",
    dest: "bajaj-health-logo.png",
  },
  {
    src: "c__Users_Abhigyan.Pandey_AppData_Roaming_Cursor_User_workspaceStorage_2fd82f126954e51ec3944e08e83f469c_images_HDFC_Life_Logo-c57840e9-bb01-41f5-9536-f06b23e65981.png",
    dest: "hdfc-life-logo.png",
  },
  {
    src: "c__Users_Abhigyan.Pandey_AppData_Roaming_Cursor_User_workspaceStorage_2fd82f126954e51ec3944e08e83f469c_images_PNB_Metlife_Logo-cec98dde-faf5-455d-8c9e-3b5daa3384aa.png",
    dest: "pnb-metlife-logo.png",
  },
  {
    src: "c__Users_Abhigyan.Pandey_AppData_Roaming_Cursor_User_workspaceStorage_2fd82f126954e51ec3944e08e83f469c_images_GPA_Logo-84d55abb-fdbc-416c-8580-fd52d0323063.png",
    dest: "gpa-logo.png",
  },
  {
    src: "c__Users_Abhigyan.Pandey_AppData_Roaming_Cursor_User_workspaceStorage_2fd82f126954e51ec3944e08e83f469c_images_HDFC___EMI_Logo-8a99cc34-cca5-4a78-90b6-a56f6a747252.png",
    dest: "hdc-emi-logo.png",
  },
];

logos.forEach(({ src, dest }) => {
  const srcPath = path.join(assetsBase, src);
  const destPath = path.join(publicDir, dest);
  try {
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log("Copied:", dest);
    } else {
      console.warn("Source not found:", srcPath);
    }
  } catch (e) {
    console.error("Error copying", dest, e.message);
  }
});
