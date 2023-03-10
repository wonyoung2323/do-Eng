package com.ssafy.doeng.controller;

import com.ssafy.doeng.data.dto.info.request.RequestMaterialInfoDto;
import com.ssafy.doeng.data.dto.info.request.RequestSceneInfoDto;
import com.ssafy.doeng.data.dto.info.request.RequestScriptInfoDto;
import com.ssafy.doeng.data.dto.info.request.RequestTaleInfoDto;
import com.ssafy.doeng.data.dto.info.request.RequestWordInfoDto;
import com.ssafy.doeng.service.info.InfoService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/info")
public class InfoController {
    private static final Logger LOGGER = LoggerFactory.getLogger(InfoController.class);
    private final InfoService infoService;
    @PostMapping("/tale")
    public ResponseEntity<String> postTale(@RequestBody RequestTaleInfoDto requestTaleInfoDto) {
        infoService.saveTale(requestTaleInfoDto);
        return ResponseEntity.ok().body("tale 저장 완료");
    }

    @PostMapping("/scene")
    public ResponseEntity<String> postScene(@RequestBody RequestSceneInfoDto requestSceneInfoDto) {
        infoService.saveScene(requestSceneInfoDto);
        return ResponseEntity.ok().body("scene 저장 완료");
    }

    @PostMapping("/script")
    public ResponseEntity<String> postScript(@RequestBody RequestScriptInfoDto requestScriptInfoDto) {
        infoService.saveScript(requestScriptInfoDto);
        return ResponseEntity.ok().body("script 저장 완료");
    }

    @PostMapping("/word")
    public ResponseEntity<String> postWord(@RequestBody RequestWordInfoDto requestWordInfoDto) {
        infoService.saveWord(requestWordInfoDto);
        return ResponseEntity.ok().body("word 저장 완료");
    }

    @PostMapping("/material")
    public ResponseEntity<String> postMaterial(@RequestBody RequestMaterialInfoDto requestMaterialInfoDto) {
        return ResponseEntity.ok().body("material 저장 완료");
    }
}
