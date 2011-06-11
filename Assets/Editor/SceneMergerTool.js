@CustomEditor(SceneMerger)

class SceneMergerTool extends Editor {
	
	private function CleanupSubscenes() {
       	var placeholder = GameObject.FindWithTag("Placeholder") as GameObject;
       	if (placeholder) DestroyImmediate(placeholder);
	}
	
    function OnInspectorGUI() {
    	DrawDefaultInspector();
        if (GUILayout.Button("Update Scenes")) {
        	CleanupSubscenes();
        	EditorApplication.OpenSceneAdditive("Assets/Scenes/BG.unity");
        	GameObject.Find("BG").tag = "Placeholder";
        }
        if (GUILayout.Button("Cleanup")) CleanupSubscenes();
    }
}
