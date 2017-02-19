$(function(){
    

    $("#elastic_grid_demo").elastic_grid({
        'items' :
            [

                {
                    'title'         : 'Documentación de Obra',
                    'description'   : 'Documentación escencial para administrar y dirigir',
                    'thumbnail'     : ['images/4-thumb.png', 'images/5-thumb.png', 'images/6-thumb.png', 'images/7-thumb.png', 'images/8-thumb.png', 'images/9-thumb.png', 'images/10-thumb.png'],
                    'large'         : ['images/4.png', 'images/5.png', 'images/6.png', 'images/7.png', 'images/8.png', 'images/9.png', 'images/10.png'],
                    
                    'button_list'   :
                    [
                        { 'title':'P.B', 'url': 'images/4.png'},
                        { 'title':'P.A', 'url': 'images/5.png'}
                    ],
                    'tags'          : ['Planos Constructivos']
                },

                {
                    'title'         : 'Vistas Informativas',
                    'description'   : 'Imagenes donde ampliamos el horizonte de los planos',
                    'thumbnail'     : ['images/planta3D-thumb.png', 'images/corte-thumb.png', 'images/prev-thumb.png'],
                    'large'         : ['images/planta3D.png', 'images/corte.png', 'images/prev.png'],
                    'button_list'   :
                    [
                        
                        { 'title':'Corte', 'url': 'images/corte.png'},
                        { 'title':'Detalle', 'url': 'images/prev.png'}
                    ],
                    'tags'          : ['Vistas']
                },

                {
                    'title'         : 'Renders Cartelería',
                    'description'   : 'Imagenes detalladas ideales para la venta',
                    'thumbnail'     : ['images/cocina-thumb.png', 'images/fachada-thumb.png','images/fachada1-thumb.png'],
                    'large'         : ['images/cocina.png', 'images/fachada.png','images/fachada1.png'],
                    'button_list'   :
                        [
							{ 'title':'Cocina', 'url': 'images/cocina.png'},
                            { 'title':'Fachada', 'url': 'images/fachada.png'}
                        ],
                    'tags'          : ['Renders']

                }

        ]
    });
    
});
