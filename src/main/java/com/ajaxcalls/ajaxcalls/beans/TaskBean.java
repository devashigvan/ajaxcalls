package com.ajaxcalls.ajaxcalls.beans;

import java.io.Serializable;

@SuppressWarnings("serial")
public class TaskBean implements Serializable {

	private int id;
	private String task_name;
	private String created_date;
	private String last_modified_date;
	
	public TaskBean() {
		super();
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTask_name() {
		return task_name;
	}
	public void setTask_name(String task_name) {
		this.task_name = task_name;
	}
	public String getCreated_date() {
		return created_date;
	}
	public void setCreated_date(String created_date) {
		this.created_date = created_date;
	}
	public String getLast_modified_date() {
		return last_modified_date;
	}
	public void setLast_modified_date(String last_modified_date) {
		this.last_modified_date = last_modified_date;
	}
	@Override
	public String toString() {
		return "TaskBean [id=" + id + ", task_name=" + task_name + ", created_date=" + created_date
				+ ", last_modified_date=" + last_modified_date + "]";
	}
	
}