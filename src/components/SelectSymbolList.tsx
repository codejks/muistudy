import React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

export default function SelectSymbolList() {
    return (
    <TreeView
        aria-label="multi-select"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        multiSelect
        sx={{ height: 216, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
      >
        <TreeItem nodeId="1" label="기본군대부호">
          <TreeItem nodeId="2" label="우주항적" />
          <TreeItem nodeId="3" label="공중항적" />
          <TreeItem nodeId="4" label="지상항적" >
              <TreeItem nodeId="5" label="부대">
                  <TreeItem nodeId="6" label="전투" />
                  <TreeItem nodeId="7" label="전투지원" />
                  <TreeItem nodeId="8" label="전투근무지원" />
              </TreeItem>
          </TreeItem>
        </TreeItem>
        <TreeItem nodeId="9" label="작전활동부호">
          <TreeItem nodeId="10" label="임무">
          </TreeItem>
          <TreeItem nodeId="11" label="지휘통제 및 일반작전">
            <TreeItem nodeId="12" label="일반"/>
          </TreeItem>
        </TreeItem>
      </TreeView>
    );
}