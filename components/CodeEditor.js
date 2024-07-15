import React from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-github_dark';

const CodeEditor = ({ setCode }) => {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="h-8 bg-[#333333] text-white flex items-center justify-start gap-2">
        <span className="ml-4 font-bold text-green-700">&lt;/&gt;</span>
        Code
      </div>
      <AceEditor
        mode="javascript"
        theme="github_dark"
        onChange={(value) => setCode(value)}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        fontSize={16}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        width="100%"
        height="calc(100% - 4rem)" // Adjust height to account for the header and footer
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
        }}
        className="flex-grow"
      />
      <div className="h-8 bg-[#333333] text-white flex items-center justify-start gap-2 p-2">
        <button className="flex items-center px-4 py-1 bg-[#4CAF50] text-white rounded hover:bg-[#45A049]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.7-9.3a1 1 0 011.4 0l3 3a1 1 0 01-1.4 1.4l-2.3-2.3-2.3 2.3a1 1 0 01-1.4-1.4l3-3z" clipRule="evenodd" />
          </svg>
          Run
        </button>
        <button className="flex items-center px-4 py-1 bg-[#4CAF50] text-white rounded hover:bg-[#45A049]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M2 10a8 8 0 1016 0 8 8 0 00-16 0zm10.59-1.41L10 12.17l-2.59-2.58a1 1 0 00-1.42 1.42l3 3a1 1 0 001.42 0l4-4a1 1 0 10-1.42-1.42z" clipRule="evenodd" />
          </svg>
          Submit
        </button>
      </div>
    </div>
  );
};

export default CodeEditor;
