class MyWindow extends EditorWindow {
    // Add menu named "My Window" to the Window menu
    @MenuItem ("Window/My Window")
    static function Init () {
        // Get existing open window or if none, make a new one:
        var window : MyWindow = EditorWindow.GetWindow (MyWindow);
    }
    
	private function CleanupSubscenes() {
		for (var placeholder : GameObject in GameObject.FindGameObjectsWithTag("Placeholder")) {
			DestroyImmediate(placeholder);
		}
	}
	
    function OnGUI() {
        if (GUILayout.Button("Update Scenes")) {
        	CleanupSubscenes();

        	var merger = GameObject.Find("Scene Merger").GetComponent.<SceneMerger>();
        	for (var name : String in merger.mergeScenes) {
	        	EditorApplication.OpenSceneAdditive("Assets/Scenes/" + name + ".unity");
	        	GameObject.Find(name).tag = "Placeholder";
        	}

        }
        if (GUILayout.Button("Cleanup")) CleanupSubscenes();
    }

}
