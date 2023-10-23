package com.ajaxcalls.ajaxcalls.controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ajaxcalls.ajaxcalls.beans.TaskBean;

@RestController
@RequestMapping(value = "/m")
public class TaskRestController {
	
	private int taskId = 0;

	@RequestMapping(value = "/addTask", method = RequestMethod.POST)
	public ResponseEntity<Map<String, Object>> addTask(@RequestBody TaskBean taskBean){
		
		HttpHeaders headers = new HttpHeaders();
		headers.add("Content-Type", "application/json");
		Map<String, Object> response = new HashMap<String, Object>();
		
		try {
			if(taskBean.getId() > taskId) {
				taskId = taskBean.getId();
			}else {
				taskBean.setId(taskId+1);
				taskId = taskBean.getId();
			}
			response.put("status", "success");
			response.put("message", "Task saved successfully.");
			response.put("taskBean", taskBean);
			return new ResponseEntity<Map<String, Object>>(response, headers, HttpStatus.OK);
		}catch (Exception e) {
			return new ResponseEntity<Map<String, Object>>(response, headers, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}
	
	@RequestMapping(value = "/updateTask", method = RequestMethod.PUT)
	public ResponseEntity<Map<String, Object>> updateTask(@RequestBody TaskBean taskBean){
		
		HttpHeaders headers = new HttpHeaders();
		headers.add("Content-Type", "application/json");
		Map<String, Object> response = new HashMap<String, Object>();
		
		try {
			response.put("status", "success");
			response.put("message", "Task updated successfully.");
			response.put("taskBean", taskBean);
			return new ResponseEntity<Map<String, Object>>(response, headers, HttpStatus.OK);
		}catch (Exception e) {
			return new ResponseEntity<Map<String, Object>>(response, headers, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@RequestMapping(value = "/deleteTask", method = RequestMethod.DELETE)
	public ResponseEntity<Map<String, Object>> deleteTask(@RequestBody TaskBean taskBean){
		
		HttpHeaders headers = new HttpHeaders();
		headers.add("Content-Type", "application/json");
		Map<String, Object> response = new HashMap<String, Object>();
		
		try {
			response.put("status", "success");
			response.put("message", "Task deleted successfully.");
			response.put("taskBean", taskBean);
			return new ResponseEntity<Map<String, Object>>(response, headers, HttpStatus.OK);
		}catch (Exception e) {
			return new ResponseEntity<Map<String, Object>>(response, headers, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
}