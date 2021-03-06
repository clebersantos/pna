<?php
/*
Template Name: Noticias
*/
?>

<?php get_header(); ?>

<div class="wrapper section-inner">

	<div class="content left">

		 <div class="section-header">
                                    
            <h2 class="section-title"><?php the_title(); ?></h2>
                                
        </div>

		<?php 

	
		  $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;

		  $args = array(
		  	'post_type' => array( 'destaque', 'post' ),
			'posts_per_page' => 10,
			'orderby'=> 'date',
			'order' => 'DESC',
			'paged' => $paged
		  );

		  query_posts($args); ?>

													                    
		<?php if ( have_posts()) : ?>
		
			<div class="posts">
		
				<?php
		
				if ( "1" < $paged ) : ?>
				
					<div class="page-title">
					
						<h4><?php printf( __('Page %s of %s', 'hemingway'), $paged, $wp_query->max_num_pages ); ?></h4>
						
					</div>
					
					<div class="clear"></div>
				
				<?php endif; ?>
					
		    	<?php while (have_posts()) : the_post(); ?>
		    	
					<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
		    	
			    		<?php get_template_part( 'content', get_post_format() ); ?>
			    				    		
		    		</div> <!-- /post -->
		    			        		            
		        <?php endwhile; ?>
	        	                    
			<?php endif; ?>
			
		</div> <!-- /posts -->
		
		<?php if ( $wp_query->max_num_pages > 1 ) : ?>
		
			<div class="post-nav archive-nav">
						
				<?php echo get_next_posts_link( __('&laquo; Older<span> posts</span>', 'hemingway')); ?>
							
				<?php echo get_previous_posts_link( __('Newer<span> posts</span> &raquo;', 'hemingway')); ?>
				
				<div class="clear"></div>
				
			</div> <!-- /post-nav archive-nav -->
		
		<?php endif; ?>
			
	</div> <!-- /content.left -->
	<?php wp_reset_query(); ?>
		
	<?php get_sidebar(); ?>
	
	<div class="clear"></div>

</div> <!-- /wrapper -->
	              	        
<?php get_footer(); ?>