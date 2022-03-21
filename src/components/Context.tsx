import React, {useState} from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import SelectSymbolBox from './SelectSymbolBox';

export default function Context() {
    const [contextMenu, setContextMenu] = useState<{
        mouseX: number;
        mouseY: number;
      } | null>(null);
    
    const [symbolMenu, setSymbolMenu] = useState(false);

      const handleContextMenu = (event: React.MouseEvent) => {
        event.preventDefault();
        setContextMenu(
          contextMenu === null
            ? {
                mouseX: event.clientX - 2,
                mouseY: event.clientY - 4,
              }
            : // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
              // Other native context menus might behave different.
              // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
              null,
        );
      };
    
      const handleClose = () => {
        setContextMenu(null);
      };

      const openCreateSymbolModal = () => {
        handleClose();
        setSymbolMenu(true);
      }

      const closeCreateSymbolModal = () => {
        setSymbolMenu(false);
      }
    return (
      <Container>
        <div onContextMenu={handleContextMenu} style={{ cursor: 'context-menu'}}>
            <canvas tabIndex={0} width={1024} height={847} style={{border:'1px solid black', marginTop:'100px'}}></canvas>
          <Menu
            open={contextMenu !== null}
            onClose={handleClose}
            anchorReference="anchorPosition"
            anchorPosition={
              contextMenu !== null
              ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
              : undefined
            }
            >
            <MenuItem onClick={openCreateSymbolModal}>Create</MenuItem>
            <MenuItem onClick={handleClose}>Update</MenuItem>
            <MenuItem onClick={handleClose}>Delete</MenuItem>
          </Menu>
          <Dialog open={symbolMenu}>
                <DialogTitle>도형 선택</DialogTitle>
                <DialogContent>
                  <SelectSymbolBox />
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" onClick={() => setSymbolMenu(true)} color="primary">
                        속성
                    </Button>
                    <Button variant="outlined" onClick={() => setSymbolMenu(true) } color="inherit">
                        적용
                    </Button>
                    <Button variant="outlined" onClick={closeCreateSymbolModal} color="secondary">
                        닫기
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
      </Container>
    );
}