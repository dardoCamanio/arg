<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see http://codeigniter.com/user_guide/general/urls.html
	 */

	public function __construct(){
		parent::__construct();
		$this->load->helper('url');
		$this->load->helper('file');
		$this->load->helper('date');
		//$this->load->helper('form');
		//$this->load->library('form_validation');
		$this->load->library('user_agent');

	}
	public function agente(){
		if ($this->agent->is_browser())
		{
		        $agent = $this->agent->browser().' '.$this->agent->version();
		}
		elseif ($this->agent->is_robot())
		{
		        $agent = $this->agent->robot();
		}
		elseif ($this->agent->is_mobile())
		{
		        $agent = $this->agent->mobile();
		}
		else
		{
		        $agent = 'Unidentified User Agent';
		}

		return $agent;

		//echo $this->agent->platform(); // Platform info (Windows, Linux, Mac, etc.)
	}

	public function index()
	{
		$format = 'DATE_RFC822';
		$time = now('America/Argentina/Buenos_Aires');
		$data['fecha'] = standard_date($format, $time);

		$data['ip_remota'] = $this->input->ip_address();
		
		$txt = "\n".$data['ip_remota'].";"."acceso".";".$data['fecha'].";".$this->agente().";";
		write_file('application/logs/accesos.txt', $txt, 'a+');
		$this->load->view('welcome_message');
	}

	public function post_contact()
	{
		
		// convert_accented_characters($nombre)
		$data['mensaje'] = $this->security->xss_clean(strip_tags($_POST['txt-msg']));
		$data['email'] = $this->security->xss_clean(strip_tags($_POST['txt-email']));
		$data['nombre'] = $this->security->xss_clean(strip_tags($_POST['txt-email']));
		$data['agente'] = $this->agente();
		$data['ip_remota'] = $this->input->ip_address();
		$txt = "\n".$data['ip_remota'].";".$data['email'].";".$data['nombre'].";".$data['agente'].";".$data['mensaje'].";";
		write_file('application/logs/data.txt', $txt, 'a+');
		//$this->load->view('welcome_prueba',$data);
		$this->load->library('email');
		
		$this->email->from('email@email.com', 'Name');
		$this->email->to('ecam.construcciones@gmail.com');
		$this->email->subject('subject');
		$this->email->message('message'.$data['mensaje']);
		
		$this->email->send();
		
		echo $data['mensaje'];
	}
	public function get_contact()
	{
		
		// convert_accented_characters($nombre)
		$data['mensaje'] = "hola";//$this->security->xss_clean(strip_tags($_POST['txt-msg']));
		/*$data['email'] = $this->security->xss_clean(strip_tags($_POST['txt-email']));
		$data['nombre'] = $this->security->xss_clean(strip_tags($_POST['txt-email']));
		$data['agente'] = $this->agente();
		$data['ip_remota'] = $this->input->ip_address();
		$txt = "\n".$data['ip_remota'].";".$data['email'].";".$data['nombre'].";".$data['agente'].";".$data['mensaje'].";";
		write_file('application/logs/data.txt', $txt, 'a+');
		//$this->load->view('welcome_prueba',$data);
		$this->load->library('email');
		
		$this->email->from('email@email.com', 'Name');
		$this->email->to('ecam.construcciones@gmail.com');
		$this->email->subject('subject');
		$this->email->message('message'.$data['mensaje']);
		
		$this->email->send();*/
		
		echo $data['mensaje'];
	}
}
