/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Sections components
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// Avatars page components
import AvatarGroup from "layouts/sections/elements/avatars/components/AvatarGroup";
import AvatarSize from "layouts/sections/elements/avatars/components/AvatarSize";

// Avatars page components code
import avatarGroupCode from "layouts/sections/elements/avatars/components/AvatarGroup/code";
import avatarSizeCode from "layouts/sections/elements/avatars/components/AvatarSize/code";

function Avatars() {
  return (
    <BaseLayout
      title={
        <>
          Création Compte PayPal Vérifié <VerifiedOutlinedIcon fontSize="small" /> et fonctionnel à
          Madagascar
        </>
      }
      breadcrumb={[
        { label: "Création Compte PayPal", route: "/sections/elements/avatars" },
        { label: "Choix de Comtpe" },
      ]}
    >
      <View title="Compte Professionnel" code={avatarGroupCode}>
        <AvatarGroup />
      </View>
      <View title="Compte Particulier" code={avatarSizeCode}>
        <AvatarSize />
      </View>
    </BaseLayout>
  );
}

export default Avatars;
