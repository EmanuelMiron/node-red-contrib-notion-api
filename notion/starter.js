module.exports = function (RED) {
	function NotionDB(config) {
		RED.nodes.createNode(this, config);

		this.on("input", function (msg, send, done) {
			try {
				// Insert your code here
				msg.payload = 'Notion DB'
				send(msg)

				if (done) {
					done();
				}
			} catch (error) {
				done(error);
			}
		});

		this.on("close", function (removed, done) {
			if (removed) {
				// This node has been disabled/deleted
			} else {
				// This node is being restarted
			}
			done();
		});
	}

	RED.nodes.registerType("notion-db", NotionDB);
};
