class SceneSaveHook extends SaveAssetsProcessor {
	static function OnWillSaveAssets(paths : String[]) : String[] {
        for (var path : String in paths) {
        	if (path.EndsWith(".unity")) {
		       	var merger = GameObject.Find("Scene Merger").GetComponent.<SceneMerger>();
        		merger.ClearOverlay();
        	}
        }
        return paths;
	}
}
