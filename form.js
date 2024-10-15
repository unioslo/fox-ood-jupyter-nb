'use strict'

/**
 * Toggle the visibilty of a form group
 *
 * @param      {string}    form_id  The form identifier
 * @param      {boolean}   show     Whether to show or hide
 */
function toggle_visibility_of_form_group(form_id, show) {
  let form_element = $(form_id);
  let parent = form_element.parent();

  if(show) {
    parent.show();
  } else {
    form_element.val('');
    parent.hide();
  }
}

function toggle_selfinstall() {
	let selfinstall_select = $('#batch_connect_session_context_jupyter_install');

	if(selfinstall_select.prop("checked")) {
		toggle_visibility_of_form_group('#batch_connect_session_context_auto_modules_JupyterLab', false);
		toggle_visibility_of_form_group('#batch_connect_session_context_jupyter_envtype', true);
		toggle_visibility_of_form_group('#batch_connect_session_context_env_path', true);
	} else {
		toggle_visibility_of_form_group('#batch_connect_session_context_auto_modules_JupyterLab', true);
		toggle_visibility_of_form_group('#batch_connect_session_context_auto_modules_Python', false);
		toggle_visibility_of_form_group('#batch_connect_session_context_jupyter_envtype', false);
		toggle_visibility_of_form_group('#batch_connect_session_context_env_path', false);
	}
}

function set_selfinstall_change_handler() {
	let jupyter_install = $('#batch_connect_session_context_jupyter_install');
	jupyter_install.change(selfinstall_change_handler);
}

function selfinstall_change_handler() {
	toggle_selfinstall();
}

function set_envtype_change_handler() {
	let envtype = $('#batch_connect_session_context_jupyter_envtype');
	envtype.change(envtype_change_handler);
}

function envtype_change_handler() {
	toggle_envtype();
}

function toggle_envtype() {
	let envtype_select = $('#batch_connect_session_context_jupyter_envtype');

	if(envtype_select.val() == "0") { /* Python venv */
		toggle_visibility_of_form_group('#batch_connect_session_context_auto_modules_Python', true);
	}

	if(envtype_select.val() == "1") { /* Conda env */
		toggle_visibility_of_form_group('#batch_connect_session_context_auto_modules_Python', false);
	}
}


$(document).ready(function() {
  toggle_selfinstall();
  toggle_envtype();
  set_selfinstall_change_handler();
  set_envtype_change_handler();
});

