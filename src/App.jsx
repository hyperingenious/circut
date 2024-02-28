import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@mantine/core/styles.css";
import '@mantine/carousel/styles.css';
import AppShell from "./pages/AppShell";
import Home from "./pages/Home";
import CricutBundle from "./pages/minor/CricutBundle";
import CricutStickerBundle from "./pages/minor/CricutStickerBundle";
import CricutCrafting from "./pages/minor/CricutCrafting";
import CricutSupplies from "./pages/minor/CricutSupplies";
import CricutSmartMaterials from './pages/minor/CricutSmartMaterials'
import CricutSmartAccessories from "./pages/minor/CricutSmartAccessories";
import CricutMachine from "./pages/machine/CricutMachine";
import CricutCuttingMachine from "./pages/machine/CricutCuttingMachine";
import CricutCutter from "./pages/machine/CricutCutter";
import CricutBlades from "./pages/machine/CricutBlades";
import CircutDesignSpace from "./pages/design-space/CircutDesignSpace";
import CricutDesignSpaceLogin from "./pages/design-space/CricutDesignSpaceLogin";
import CircutDesignSpaceDownload from "./pages/design-space/CircutDesignSpaceDownload";
import CricutEasyPress from "./pages/press/CricutEasyPress";
import CricutHeatGuide from "./pages/press/CricutHeatGuide";
import CircutHeatPressGuide from "./pages/press/CircutHeatPressGuide";
import CricutHeatPress from "./pages/press/CricutHeatPress";
import CricutMugPress from './pages/press/CricutMugPress'
import CricutExploreAir2 from "./pages/explore/CricutExploreAir2";
import CricutJoy from "./pages/joy/CricutJoy";
import CricutVinyl from './pages/joy/CricutVinyl'
import CricutJoyVinyl from './pages/joy/CricutJoyVinyl'
import CricutMaker3 from "./pages/maker/CricutMaker3";
import CricutMaker from "./pages/maker/CricutMaker";

export default function App() {
  return (
    <MantineProvider defaultColorScheme="light">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppShell />}>

            <Route element={<Home />} index />

            <Route path="minor">
              <Route path="cricut-bundle" element={<CricutBundle />} />
              <Route path="cricut-sticker-paper" element={<CricutStickerBundle />} />
              <Route path="cricut-crafting" element={<CricutCrafting />} />
              <Route path="cricut-supplies" element={<CricutSupplies />} />
              <Route path="cricut-smart-materials" element={<CricutSmartMaterials />} />
              <Route path="cricut-smart-accessories" element={<CricutSmartAccessories />} />
            </Route>

            <Route path="machine">
              <Route path="cricut-machine" element={<CricutMachine />} />
              <Route path="cricut-cutting-machine" element={<CricutCuttingMachine />} />
              <Route path="cricut-cutter" element={<CricutCutter />} />
              <Route path="cricut-blades" element={<CricutBlades />} />
            </Route>

            <Route path="design-space">
              <Route path="cricut-design-space" element={<CircutDesignSpace />} />
              <Route path="cricut-design-space-login" element={<CricutDesignSpaceLogin />} />
              <Route path="cricut-design-space-download" element={<CircutDesignSpaceDownload />} />
            </Route>

            <Route path="press">
              <Route path="cricut-easy-press" element={<CricutEasyPress />} />
              <Route path="cricut-heat-guide" element={<CricutHeatGuide />} />
              <Route path="cricut-heat-press-guide" element={<CircutHeatPressGuide />} />
              <Route path="cricut-heat-press" element={<CricutHeatPress />} />
              <Route path="cricut-mug-press" element={<CricutMugPress />} />
            </Route>

            <Route path="explore">
              <Route path="cricut-explore-air-2" element={<CricutExploreAir2 />} />
            </Route>

            <Route path="joy">
              <Route path="cricut-joy" element={<CricutJoy />} />
              <Route path="cricut-vinyl" element={<CricutVinyl />} />
              <Route path="cricut-joy-vinyl" element={<CricutJoyVinyl />} />
            </Route>

            <Route path="maker">
              <Route path="cricut-maker-3" element={<CricutMaker3 />} />
              <Route path="cricut-maker" element={<CricutMaker />} />
            </Route>

            <Route path="legal">
              <Route path="terms-of-use"   />
              <Route path="privacy-policy" />
              <Route path="regional-specific-privacy-notices" />
              <Route path="angel-policy" />
              <Route path="online-policies" />
              <Route path="cricut-access-policy" />
              <Route path="patents" />
              <Route path="claims-of-infringement" />
              <Route path="submission-agreement" />
              <Route path="terms-nd-conditions" />
              <Route path="eula" />
              <Route path="accessibility" />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}
