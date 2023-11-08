import { AppBar as MuiAppBar } from "@mui/material/";
import Toolbar from "@mui/material/Toolbar";

type Props = {
  drawerWidth: number;
};

const Appbar = ({ drawerWidth }: Props) => {
  return (
    <MuiAppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
      }}
    >
      <Toolbar></Toolbar>
    </MuiAppBar>
  );
};

export default Appbar;
