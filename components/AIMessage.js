const AIMessage = ({ message }) => {
  return (
    <div className="flex justify-start mb-2 text-wrap">
      <div className="rounded-xl px-4 py-2 max-w-xs lg:max-w-md border-2 border-[#1f1f1f] text-pretty">
        {/* Using dangerouslySetInnerHTML to inject HTML content safely */}
        <div
          className="text-lg text-[#fafafa] text-wrap"
          dangerouslySetInnerHTML={{
            __html: message.replace(
              /<p>/g,
              '<p class="my-4">'
            ).replace(
              /<pre><code>/g,
              '<pre class="bg-gray-800 p-4 rounded-lg text-wrap"><code class="text-[#fafafa]">'
            ).replace(
              /<\/code><\/pre>/g,
              '</code></pre>'
            ),
          }}
        />
      </div>
    </div>
  );
};

export default AIMessage;
