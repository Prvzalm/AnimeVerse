import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

// RichTextEditor component for creating forum posts
const RichTextEditor = ({ onEditorChange }) => {
  const [content, setContent] = useState('');

  const handleEditorChange = (newContent) => {
    setContent(newContent);
    onEditorChange(newContent); // Pass the content to the parent component
  };

  return (
    <div className="rich-text-editor">
      <Editor
        apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY} // Use your TinyMCE API key
        value={content}
        init={{
          height: 400,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
          ],
          toolbar:
            'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | code',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        }}
        onEditorChange={handleEditorChange}
      />
    </div>
  );
};

export default RichTextEditor;