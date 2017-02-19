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

	public function fecha(){
		$format = 'DATE_RFC822';
		$time = now('America/Argentina/Buenos_Aires');
		return standard_date($format, $time);
	}

	public function index()
	{
		
		$data['fecha'] = $this->fecha();
		$data['ip_remota'] = $this->input->ip_address();
		
		$txt = "\n".$data['ip_remota'].";"."acceso".";".$data['fecha'].";".$this->agente().";";
		write_file('./data/accesos.txt', $txt, 'a+');
		$this->load->view('welcome_message');
	}

	public function get_prueba()
	{
		echo "hola";
	}

	public function upload($archivo)
	{
		if(file_exists('./dropbox/vendor/autoload.php')){
		    require './dropbox/vendor/autoload.php';
		    require './data/backup.php';    

		    //set access token
		    $token = 'L_UDHFPmtJYAAAAAAAAA-cF7a_AtTcb19EwVU0hMMLz6yzdq6P1hmOsBLoQFTt7B';
		    $project = './data/';
		    $projectFolder = date('l');

		    $bk = new Backup($token,$project,$projectFolder);
		    if($bk->upload($archivo)){
		    	return true;
		    	exit;	
		    }
		    return false;

		} else {
		    echo "<h1>Please install via composer.json</h1>";
		    echo "<p>Install Composer instructions: <a href='https://getcomposer.org/doc/00-intro.md#globally'>https://getcomposer.org/doc/00-intro.md#globally</a></p>";
		    echo "<p>Once composer is installed navigate to the working directory in your terminal/command prompt and enter 'composer install'</p>";
		    exit;
		}
	}

	public function post_contact()
	{
		
		// convert_accented_characters($nombre)
		$data['mensaje'] = $this->security->xss_clean(strip_tags($_POST['txt-msg']));
		$data['email'] = $this->security->xss_clean(strip_tags($_POST['txt-email']));
		$data['nombre'] = $this->security->xss_clean(strip_tags($_POST['txt-nome']));
		$data['agente'] = $this->agente();
		$data['ip_remota'] = $this->input->ip_address();
		$data['fecha'] = $this->fecha();
		$txt = "\n".$data['ip_remota'].";".$data['email'].";".$data['nombre'].";".$data['agente'].";".$data['mensaje'].";".$data['fecha'].";";
		write_file('./data/data.txt', $txt, 'w');
		if($this->upload('./data/data.txt')){
			echo 'ok';
		}
		
		//$this->load->view('welcome_prueba',$data);
		/*$this->load->library('email');
		
		$this->email->from('email@email.com', 'Name');
		$this->email->to('ecam.construcciones@gmail.com');
		$this->email->subject('subject');
		$this->email->message('message'.$data['mensaje']);
		
		$this->email->send();*/
		
		return "error";
	}


	
}
