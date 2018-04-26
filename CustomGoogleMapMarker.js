function CustomMarker(latlng, map, args) {
	this.latlng = latlng;	
	this.args = args;	
	this.setMap(map);
}

CustomMarker.prototype = new google.maps.OverlayView();

//Определение ширины окна 
var $parent,
 windowWidth,
 windowHeight;
function winSize() {
 windowWidth = $(window).width(),
 windowHeight = $(window).height();
}
winSize();
$(window).resize(winSize);


CustomMarker.prototype.draw = function() {
	
	var self = this;
	var div = this.div;
	
    if (self.args.type == "kvartira")
    {
        if (!div) {
            div = this.div = document.createElement('div');
            div.className = 'customMarker';
            var id = this.args.id;
            div.id = id;
            var littlePrice = Number((this.args.price / 1000000).toFixed(1)) + ' млн. <div class="pipka"></div>';
            div.innerHTML = littlePrice;
            if (typeof(self.args.marker_id) !== 'undefined') {
                div.dataset.marker_id = self.args.marker_id;
            }
            
            
            customMarkerData = document.createElement('div');
            customMarkerData.className = 'customMarkerData';
            
            close_kv_info = document.createElement('div');
            close_kv_info.className = 'close_kv_info';
            
            customMarkerDataCont = document.createElement('div');
            customMarkerDataCont.className = 'customMarkerDataCont';
                        
            
            customMarkerData.appendChild(close_kv_info);
            customMarkerData.appendChild(customMarkerDataCont);
            div.appendChild(customMarkerData);
            
            var batya_index = 0;
            
            google.maps.event.addDomListener(close_kv_info, "click", function(event) {
                setTimeout(function() { 
                    $('#'+ id + ' .customMarkerData').hide();
                    $('#'+ id).css("z-index", "3");
                    $('#'+ id).parent().css("z-index", 1);
                }, 100);
            });

            //Зеленые квартиры
            google.maps.event.addDomListener(div, "mouseover", function(event) {
                var tooltip = $('#'+id+' .customMarkerData');
                var tooltipWidth = $('#'+id+' .customMarkerData').width() / 2;
                var tooltipHeight = $('#'+id+' .customMarkerData').height() / 2 + 20;
                
                if (event.clientX + tooltipWidth >= windowWidth) {
                    tooltip.css('transform', `translateX(-${tooltipWidth}px)`);
                }
                if (event.clientX - tooltipWidth <= windowWidth / 2) {
                    tooltip.css('transform', `translateX(${tooltipWidth}px)`);
                }
                if (event.clientY - tooltipHeight <= 160) {
                    tooltip.css('transform', `translateY(${tooltipHeight}px)`);
                }
                if (event.clientY + tooltipHeight >= windowHeight) {
                    tooltip.css('transform', `translateY(-${tooltipHeight-50}px)`);
                }

                show_info(id);
                $('#'+ id).css("z-index", "99999");
                batya_index = $('#'+ id).parent().css("z-index"); 
                $('#'+ id).parent().css("z-index", "99999"); 
                                                
                google.maps.event.trigger(self, "mouseover");
            });
            //Зеленые квартиры клик
            google.maps.event.addDomListener(div, "click", function(event) {
                var tooltip = $('#'+id+' .customMarkerData');
                var tooltipWidth = $('#'+ id +' .customMarkerData').width() / 2;
                var tooltipHeight = $('#'+id+' .customMarkerData').height() / 2 + 20;
                
                if (event.clientX + tooltipWidth >= windowWidth) {
                    tooltip.css('transform', `translateX(-${tooltipWidth}px)`);
                }
                if (windowWidth > 991 && event.clientX - tooltipWidth <= windowWidth / 2) {
                    tooltip.css('transform', `translateX(${tooltipWidth}px)`);
                }
                if (event.clientY - tooltipHeight <= 160) {
                    tooltip.css('transform', `translateY(${tooltipHeight}px)`);
                }
                if (event.clientY + tooltipHeight >= windowHeight) {
                    tooltip.css('transform', `translateY(-${tooltipHeight-50}px)`);
                }
                if (windowWidth < 992 && event.clientX + tooltipWidth >= windowWidth) {
                    tooltip.css('transform', `translateX(-${tooltipWidth}px)`);
                }
                show_info(id);
                batya_index = $('#'+ id).parent().css("z-index"); 
                $('#'+ id).parent().css("z-index", "99999"); 
                $('#'+ id).css("z-index", "99999");
                google.maps.event.trigger(self, "click");
            });
            
            google.maps.event.addDomListener(div, "mouseout", function(event) {
                $('#'+ id + ' .customMarkerData').hide();
                $('#'+ id).css("z-index", "3");
                $('#'+ id).parent().css("z-index", 1);                 
                google.maps.event.trigger(self, "mouseout");
            });
            
            var panes = this.getPanes();
            panes.overlayImage.appendChild(this.div);
        }
        var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
        if (point) {
            this.div.style.left = (point.x - 38) + 'px';
            this.div.style.top = (point.y - 33) + 'px';
        }
    }
    else
    {
        if (self.args.type == "contacts")
        {
            if (!div) {
                div = this.div = document.createElement('div');
                div.className = 'contacts_marker';

                var cont_info = document.createElement('div');
                var cont_info_text = 'Бизнес-центр "Флагман"<br />Режим работы: пн-вс с 10:00 до 20:00';
                cont_info.className = 'cont_info_text';
                cont_info.innerHTML = cont_info_text;
                
                google.maps.event.addDomListener(div, "mouseover", function(event) {
                    $('.cont_info_text').show();
                });
                                                 
                google.maps.event.addDomListener(div, "mouseout", function(event) {
                    $('.cont_info_text').hide();
                });
                
                div.appendChild(cont_info);
                
                if (typeof(self.args.marker_id) !== 'undefined') {
                    div.dataset.marker_id = self.args.marker_id;
                }

                var panes = this.getPanes();
                panes.overlayImage.appendChild(this.div);
            }
            var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
            if (point) {
                this.div.style.left = (point.x - 12) + 'px';
                this.div.style.top = (point.y - 23) + 'px';
            }  
        }
        else
        {
            if (!div) {
                div = this.div = document.createElement('div');
                div.className = 'objectMarker ob'+this.args.type;
                var littlePrice = '<div class="object_pipka"></div>';
                div.innerHTML = littlePrice;
                    
                var adress_name = document.createElement('div');
                adress_name.className = 'adress_name';
                adress_name.innerHTML = '<p>'+this.args.name+'</p><p>'+this.args.vicinity+'</p>';
                div.appendChild(adress_name);
                
                //Кружки из фильтра
                google.maps.event.addDomListener(div, "mouseover", function(event) {
                    //console.log('cY'+ event.clientY);
                    //console.log('cX'+ event.clientX);
                    //console.log('h' + windowHeight);
                    //console.log('w' + windowWidth);

                    var tooltipWidth = $('.adress_name').width() / 2 + 20;
                    var tooltipHeight = $('.adress_name').height() / 2 + 20;
                    //console.log('ttw' + tooltipWidth);
                    adress_name.style.display = "block";
                    //Если подскаска вылазет за правый край сдвигаем влево
                    
                    //Границы по иксу
                    if (event.clientX + tooltipWidth + 20 >= windowWidth) {
                        adress_name.style.transform = `translateX(-${tooltipWidth}px)`;
                    }
                    if (windowWidth > 991 && event.clientX - tooltipWidth - 20 <= windowWidth / 2) {
                        adress_name.style.transform = `translateX(${tooltipWidth}px)`;
                    }
                    if (windowWidth < 992 && event.clientX - tooltipWidth - 20 <= 10) {
                        adress_name.style.transform = `translateX(${tooltipWidth}px)`;
                    }
                    //Границы по Y
                    if (event.clientY - tooltipWidth <= 160) {
                        adress_name.style.transform = `translateY(${tooltipHeight}px)`;
                    }
                    if (event.clientY + tooltipWidth >= windowHeight) {
                       adress_name.style.transform = `translateY(-${tooltipHeight}px)`;
                    }
                    div.style.zIndex = "9999";
                });

                google.maps.event.addDomListener(div, "mouseout", function(event) {
                    adress_name.style.display = "none";
                    div.style.zIndex = "2";
                });
                
                if (typeof(self.args.marker_id) !== 'undefined') {
                    div.dataset.marker_id = self.args.marker_id;
                }
                var panes = this.getPanes();
                panes.overlayImage.appendChild(this.div);
            }
            var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
            if (point) {
                this.div.style.left = (point.x) + 'px';
                this.div.style.top = (point.y) + 'px';
            }   
        }
    }
};

//Определение координат курсора
var mmap = document.getElementById('map');
map.addEventListener('click', function(event) {
    //console.log('Y:' + event.clientY);
    //console.log('X:' + event.clientX);
})
CustomMarker.prototype.remove = function() {
	if (this.div) {
		this.div.parentNode.removeChild(this.div);
		this.div = null;
	}	
};

CustomMarker.prototype.getPosition = function() {
	return this.latlng;	
};